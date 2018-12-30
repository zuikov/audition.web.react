import { SET_COMPLEXITY, SET_TODAY_STATUS } from '../constants';

export function complexity(state = '', action) {
  switch (action.type) {
    case SET_COMPLEXITY:
      return action.payload;
    default:
      return state;
  }
}

export function todayStatus(state = {}, action) {
  switch (action.type) {
    case SET_TODAY_STATUS:
      return action.payload;
    default:
      return state;
  }
}

