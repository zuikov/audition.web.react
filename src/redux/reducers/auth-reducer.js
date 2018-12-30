import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  VERIFY_ADMIN_SUCCESS
} from '../constants';

export const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;

    case LOGIN_ERROR:
      return action.payload;

    default:
      return state;
  }
};

export function verifyAdminReducer(state = {}, action) {
  switch (action.type) {
    case VERIFY_ADMIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
