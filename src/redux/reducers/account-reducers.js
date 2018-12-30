import { GET_LOGIN_HISTORY } from '../constants';

const initState = [
  {
    'id': 1,
    'date': '2018-07-10T13:38:45.765Z',
    'location': '',
    'ip': '::1',
    'user_id': 1,
    'createdAt': '2018-07-10T13:38:45.766Z',
    'updatedAt': '2018-07-10T13:38:45.766Z'
  }
];

export function loginHistory(state = initState, action) {
  switch (action.type) {
    case GET_LOGIN_HISTORY:
      return action.payload;

    default:
      return state;
  }
}
