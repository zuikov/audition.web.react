import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_ERROR,
  VERIFY_ADMIN_SUCCESS
} from '../constants';
import { history } from '../../index';
import { apiEndpoints } from '../../utils/api-endpoints';
import { complexity } from '../../utils/complexity';
import { routes } from '../../utils/routes';
import { setComplexity } from './info-actions';
import { HttpFetch } from '../../utils/http';

import * as fetch from 'isomorphic-fetch';

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    payload: response
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error
  };
}

export function signUpSuccess(response) {
  return {
    type: SIGNUP_SUCCESS,
    payload: response
  };
}

export function verifyAdminSuccess(response) {
  return {
    type: VERIFY_ADMIN_SUCCESS,
    payload: response
  };
}

export function processGoogleAuth(response) {
  return dispatch => {
    if (response.error) {
      dispatch(loginError(response.error));
      console.log(response.error);
    } else {
      dispatch(loginSuccess(response.profileObj));
      fetch(apiEndpoints.googleLogin, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': response.accessToken
        },
        body: JSON.stringify(Object.assign({}, {profileObj: response.profileObj}))
      })
        .then(res => res.json())
        .then(res => {
          if (res && res.token !== undefined && res.refreshToken !== undefined) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('refreshToken', res.refreshToken);
            history.push(routes.account);
          }
        });
      dispatch(setComplexity(complexity[0].replace('/', '_'), true));
    }
  };
}

export function loginAction(loginData) {
  return dispatch => {
    HttpFetch.post(apiEndpoints.login, loginData)
      .then(res => {
        if (res && res.accessToken !== undefined && res.refreshToken !== undefined) {
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          history.push(routes.account);
        }
      });
    dispatch(loginSuccess({}));
    dispatch(setComplexity(complexity[0].replace('/', '_'), true));
  };
}

export function signUpAction(signUpData) {
  return dispatch => {
    HttpFetch.post(apiEndpoints.signUp, signUpData)
      .then(res => {
        if (res && res.accessToken !== undefined && res.refreshToken !== undefined) {
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          history.push(routes.account);
        }
      });
    dispatch(loginSuccess({}));
  };
}

export function verifyAdminAction() {
  return dispatch => {
    HttpFetch.post(apiEndpoints.verifyAdmin)
      .then(response => {
        if (response && response.message === 'admin status confirmed') {
          dispatch(verifyAdminSuccess(true));
          console.log('admin authorized successfully!');
        } else {
          dispatch(verifyAdminSuccess(false));
          console.log('admin authorization failed');
        }
      });
  };
}

