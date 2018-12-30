import {SHOW_TOKEN_BALANCE, GET_ACCOUNTS_HISTORY} from '../constants';
import { apiEndpoints } from '../../utils/api-endpoints';
import { HttpFetch } from '../../utils/http';

export function fetchAccountsHistory() {
  return dispatch => {
    HttpFetch.get(apiEndpoints.transactionsHistory)
      .then(res => {
        dispatch(getAccountsHistory(res));
      });
  };
}

export function getAccountsHistory(transactionsHistory) {
  return {
    type: GET_ACCOUNTS_HISTORY,
    payload: transactionsHistory
  };
}

export function fetchWalletAddress(walletName) {
  return dispatch => {
    HttpFetch.get(apiEndpoints.walletAddress + walletName)
      .then(res => {
      });
  };
}

export function tokenBalance(tokenBalance) {
  return {
    type: SHOW_TOKEN_BALANCE,
    payload: tokenBalance
  };
}

export function fetchTokenBalance(tokenName) {
  return dispatch => {
    HttpFetch.get(apiEndpoints.tokenBalance + tokenName)
      .then(res => {
        dispatch(tokenBalance(res));
      });
  };
}
