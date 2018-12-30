import {
  GET_PLAY_LIST,
  POST_LIST_ITEM,
  UPDATE_LIST_ITEM,
  DELETE_LIST_ITEM,
  GET_ACTION_HISTORY,
  SET_OFFSET_NUMBER,
  HIDE_LOAD_MORE_BUTTON,
  SET_PAIR_FILTER, SET_SIDE_FILTER, SET_DATE_FILTER, SET_DEFAULT_PAIR_FILTER,
  SET_HIDE_CANCELEDE_CHECKBOX_STATE
} from '../constants';
import moment from 'moment';
import { tokens } from '../../utils/tokens';

const initDateState = {
  fromDate: moment.utc().startOf('year').format('X'),
  toDate: moment.utc().endOf('day').format('X')
};

const initDefaultPairState = {
  firstPair: tokens.ADV,
  secondPair: tokens.all
};

const initPlaylistState = [
  {
    '_id': '5bc3677067b2d007ecd93251',
    'sectionNumber': 1,
    'sectionName': 'Intermediate',
    'title': 'Confusing Words in English',
    'description': 'Learn to Speak Fluent English',
    'link': 'https://www.youtube.com/embed/QTUJAfdaS5k'
  }
];

export function playList(state = initPlaylistState, action) {
  switch (action.type) {
    case GET_PLAY_LIST:
      return action.payload;

    default:
      return state;
  }
}

export function listItem(state = {}, action) {
  switch (action.type) {
    case POST_LIST_ITEM:
      return action.payload;
    default:
      return state;
  }
}

export function updatedListItem(state = {}, action) {
  switch (action.type) {
    case UPDATE_LIST_ITEM:
      return action.payload;
    default:
      return state;
  }
}

export function deletedListItem(state = {}, action) {
  switch (action.type) {
    case DELETE_LIST_ITEM:
      return action.payload;
    default:
      return state;
  }
}

export function actionHistory(state = [], action) {
  switch (action.type) {
    case GET_ACTION_HISTORY:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export function offsetNumber(state = 0, action) {
  switch (action.type) {
    case SET_OFFSET_NUMBER:
      return action.payload;
    default:
      return state;
  }
}

export function loadMoreButton(state = null, action) {
  switch (action.type) {
    case HIDE_LOAD_MORE_BUTTON:
      return action.payload;
    default:
      return state;
  }
}

export function pairFilter(state = 0, action) {
  switch (action.type) {
    case SET_PAIR_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export function defaultPairFilter(state = initDefaultPairState, action) {
  switch (action.type) {
    case SET_DEFAULT_PAIR_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export function sideFilter(state = 'All', action) {
  switch (action.type) {
    case SET_SIDE_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export function dateFilter(state = initDateState, action) {
  switch (action.type) {
    case SET_DATE_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export function hideCanceledCheckboxEnabled(state = false, action) {
  switch (action.type) {
    case SET_HIDE_CANCELEDE_CHECKBOX_STATE:
      return action.payload;
    default:
      return state;
  }
}
