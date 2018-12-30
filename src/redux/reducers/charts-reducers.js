import { GET_CANDLESTICK_CHART_DATA, GET_MINI_CHART_DATA, SET_HOUR_INTERVAL, SET_MINUTE_INTERVAL, SET_WEEK_INTERVAL } from '../constants';

export function candlestickData(state = {}, action) {
  switch (action.type) {
    case GET_CANDLESTICK_CHART_DATA:
      return action.payload;
    default:
      return state;
  }
}

export function getChartInterval(state = [], action) {
  switch (action.type) {
    case SET_MINUTE_INTERVAL:
      return action.payload;
    case SET_HOUR_INTERVAL:
      return action.payload;
    case SET_WEEK_INTERVAL:
      return action.payload;
    default:
      return state;
  }
}

export function getMiniChartData(state = {}, action) {
  switch (action.type) {
    case GET_MINI_CHART_DATA:
      return action.payload;
    default:
      return state;
  }
}
