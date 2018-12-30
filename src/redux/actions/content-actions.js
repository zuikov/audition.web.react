import {
  GET_PLAY_LIST,
  SET_OFFSET_NUMBER,
  HIDE_LOAD_MORE_BUTTON,
  SET_DATE_FILTER, SET_PAIR_FILTER, SET_SIDE_FILTER, SET_DEFAULT_PAIR_FILTER,
  SET_HIDE_CANCELEDE_CHECKBOX_STATE
} from '../constants';
import { apiEndpoints } from '../../utils/api-endpoints';
import { HttpFetch } from '../../utils/http';
import { tokens } from '../../utils/tokens';

export function getPlayList(playlist) {
  return {
    type: GET_PLAY_LIST,
    payload: playlist
  };
}

export function fetchPlayList() {
  return dispatch => {
    HttpFetch.get(apiEndpoints.playlist)
      .then(res => {
        dispatch(getPlayList(res));
      });
  };
}

export function setListItem(listItem) {
  return dispatch => {
    HttpFetch.post(apiEndpoints.playlist, listItem)
      .then(res => {
      });
    dispatch(fetchPlayList());
  };
}

export function updateListItem(listItem) {
  return dispatch => {
    HttpFetch.patch(apiEndpoints.content + listItem._id, listItem)
      .then(res => {
        dispatch(fetchPlayList());
      });
  };
}

export function deleteListItem(id) {
  return dispatch => {
    HttpFetch.delete(apiEndpoints.content + id)
      .then(res => {
        dispatch(fetchPlayList());
      });
  };
}

export function setDateFilter(date) {
  return {
    type: SET_DATE_FILTER,
    payload: date
  };
}

export function setPairFilter(pair) {
  let payload = '';
  if (pair.secondPair === 'All') {
    payload = 0;
  } else {
    payload = `${pair.firstPair}${pair.secondPair}`;
  }
  return {
    type: SET_PAIR_FILTER,
    payload
  };
}

export function setDefaultPairFilter() {
  return {
    type: SET_DEFAULT_PAIR_FILTER,
    payload: {
      firstPair: tokens.MKT,
      secondPair: tokens.all
    }
  };
}

export function setSideFilter(side) {
  return {
    type: SET_SIDE_FILTER,
    payload: side
  };
}

export function fetchTableFilter(filterType) {
  return dispatch => {
    if (filterType === 'actionHistory') {
      HttpFetch.get(apiEndpoints.actionHistory, false, true, true)
        .then(res => {
          dispatch();
          if (res.length === 0) {
            dispatch(loadMoreButton(res));
          }
        });
    } else if (filterType === 'auditionsHistory') {
      HttpFetch.get(apiEndpoints.auditionsHistory, false, true, true)
        .then(res => {

        });
    }
  };
}

export function setHideCanceledCheckboxState(checkboxState) {
  return {
    type: SET_HIDE_CANCELEDE_CHECKBOX_STATE,
    payload: checkboxState
  };
}

export function setOffsetNumber(offsetNumber) {
  return {
    type: SET_OFFSET_NUMBER,
    payload: offsetNumber
  };
}

export function loadMoreButton(emptyArr) {
  return {
    type: HIDE_LOAD_MORE_BUTTON,
    payload: emptyArr
  };
}
