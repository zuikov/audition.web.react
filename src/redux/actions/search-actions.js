import {
  TOGGLE_SEARCH_BTN,
  TOGGLE_CLEAR_BTN,
  CHANGE_INPUT_SEARCH_BLOCK, CLEAR_INPUT_SEARCH_BLOCK
} from '../constants';
// import { apiEndpoints } from '../../utils/api-endpoints';
// import { HttpFetch } from '../../utils/http';
// import { store } from '../store';

export function searchForm() {
  return {
    type: TOGGLE_SEARCH_BTN,
    payload: true
  };
}

export function clearForm() {
  return {
    type: TOGGLE_CLEAR_BTN,
    payload: false
  };
}

export function changeInput(name, value) {
  return {
    type: CHANGE_INPUT_SEARCH_BLOCK,
    name,
    value
  };
}

export function clearInput(name, value) {
  return {
    type: CLEAR_INPUT_SEARCH_BLOCK,
    name,
    value
  };
}

