import { GET_DOM_TABLE_DATA } from '../constants';

export const domTableData = (state = [], action) => {
  switch (action.type) {
    case GET_DOM_TABLE_DATA:
      return action.payload;

    default:
      return state;
  }
};
