import { GET_LOGIN_HISTORY } from '../constants';
import { apiEndpoints } from '../../utils/api-endpoints';
import { HttpFetch } from '../../utils/http';

export function getLoginHistory(loginHistory) {
  return {
    type: GET_LOGIN_HISTORY,
    payload: loginHistory
  };
}

export function fetchLoginHistory() {
  return dispatch => {
    HttpFetch.get(apiEndpoints.loginHistory)
      .then(res => {
        dispatch(getLoginHistory(res));
      });
  };
}
