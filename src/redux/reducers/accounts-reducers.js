import {SHOW_TOKEN_BALANCE, GET_ACCOUNTS_HISTORY} from '../constants';

export const tokenBalance = (state = {}, action) => {
  switch (action.type) {
    case SHOW_TOKEN_BALANCE:
      return action.payload;

    default:
      return state;
  }
};

export const accountsHistory = (state = [], action) => {
  switch (action.type) {
    case GET_ACCOUNTS_HISTORY:
      return action.payload;
    default:
      return state;
  }
};
