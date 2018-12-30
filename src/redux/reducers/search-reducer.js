import {
  TOGGLE_SEARCH_BTN,
  TOGGLE_CLEAR_BTN,
  CHANGE_INPUT_SEARCH_BLOCK, CLEAR_INPUT_SEARCH_BLOCK, SEARCH_BLOCK_ERROR, SEARCH_BLOCK_SUCCESS
} from '../constants';

export const searchSide = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_BTN:
      return action.payload;

    case TOGGLE_CLEAR_BTN:
      return action.payload;

    default:
      return state;
  }
};

export const searchBlock = (state = { amountValue: '', priceValue: '', stopValue: '', limitValue: '' }, action) => {
  switch (action.type) {
    case CHANGE_INPUT_SEARCH_BLOCK:
      return {
        ...state,
        [action.name]: action.value
      };
    case CLEAR_INPUT_SEARCH_BLOCK:
      return {
        ...state,
        amountValue: '',
        priceValue: '',
        stopValue: '',
        limitValue: ''
      };
    default:
      return state;
  }
};

export const searchBlockNotification = (state = '', action) => {
  switch (action.type) {
    case SEARCH_BLOCK_ERROR:
      return action.payload;
    case SEARCH_BLOCK_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
