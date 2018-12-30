
import * as fetch from 'isomorphic-fetch';
import { store } from '../redux/store';
import { apiEndpoints } from './api-endpoints';
import jwtDecode from 'jwt-decode';

export class _HttpFetch {
  checkAccessTokenDate(method, path, body, getMarketPair, offset, isFilterEnabled) {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const now = Math.floor(Date.now().valueOf() / 1000);
      console.log('access decoded.exp', decoded.exp);
      console.log('date now', now);
      if (typeof decoded.exp !== 'undefined' && decoded.exp < now) {
        console.log(`token expired: ${JSON.stringify(decoded)}`);
        this.refreshToken(method, path, body, getMarketPair, offset, isFilterEnabled);
        return false;
      }
    }
  }

  refreshToken(method, path, body, getMarketPair, offset, isFilterEnabled) {
    const refreshToken = localStorage.getItem('refreshToken');
    const decoded = jwtDecode(refreshToken);
    console.log('refreshToken', refreshToken);
    console.log('refresh decoded', decoded);
    if (refreshToken) {
      fetch(apiEndpoints.updateToken, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': refreshToken
        }
      })
        .then(response => {
          if (response.status >= 400) {
            console.log('Bad response from server');
          } else {
            return response.json();
          }
        })
        .then(response => {
          if (response) {
            console.log('response-----', response);
            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            method(path, body, getMarketPair, offset, isFilterEnabled);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  post(path, body) {
    if (this) {
      this.checkAccessTokenDate(this.post, path, body);
    }
    return fetch(path, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(response => {
        if (response.status >= 400) {
          console.log('Bad response from server');
        } else {
          return response.json();
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  patch(path, body) {
    if (this) {
      this.checkAccessTokenDate(this.patch, path, body);
    }
    return fetch(path, {
      method: 'PATCH',
      mode: 'cors',
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(response => {
        if (response.status >= 400) {
          console.log('Bad response from server');
        } else {
          return response.json();
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  delete(path) {
    if (this) {
      this.checkAccessTokenDate(this.delete, path);
    }
    return fetch(path, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(response => {
        if (response.status >= 400) {
          console.log('Bad response from server');
        } else {
          return response.json();
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  get(path, getMarketPair = false, offset = false, isFilterEnabled = false) {
    if (this) {
      this.checkAccessTokenDate(this.get, path, getMarketPair, offset, isFilterEnabled);
    }
    const complexity = store.getState().complexity;

    if (getMarketPair) {
      path = path.replace('$marketPair', complexity.replace('_', ''));
    }

    return fetch(path, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(res => {
        if (res.status >= 400) {
          console.log('Bad response from server');
        } else if (res.status >= 200 && res.status < 400) {
          return res;
        }
        throw res;
      })
      .then(res => {
        if (res.json) {
          return res.json();
        }
        return res;
      })
      .catch(e => {
        console.log(e);
      });
  }
}

export const HttpFetch = new _HttpFetch();
