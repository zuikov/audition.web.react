import { SET_COMPLEXITY, SET_TODAY_STATUS } from '../constants';
import { history } from '../../index';
import { apiEndpoints } from '../../utils/api-endpoints';
import { HttpFetch } from '../../utils/http';
import { store } from '../store';
import { pusher } from '../../utils/pusher';

export function setComplexity(level, isLogin) {
  if (!isLogin) {
    history.push(`/landing/${level}`);
  }

  return {
    type: SET_COMPLEXITY,
    payload: level
  };
}

export function setTodayStatus(todayStatusData) {
  return {
    type: SET_TODAY_STATUS,
    payload: todayStatusData
  };
}

export function fetchTodayStatus(wsConnection = false, oldMarketPair = '') {
  return dispatch => {
    const complexity = store.getState().complexity.replace('_', '');
    const prevChannel = `status-today-${oldMarketPair.replace('_', '')}`;
    if (wsConnection) {
      const wsObjStart = {
        start: {
          channel: 'status-today',
          market: complexity
        },
        stop: prevChannel
      };
      HttpFetch.get(apiEndpoints.channel, wsObjStart)
        .then(res => {
          pusher.unsubscribe(prevChannel);
          // pusher.subscribe(res.channel).bind(res.event, data => {
          //   dispatch(setTodayStatus(data));
          // });
        });
      // HttpFetch.post(apiEndpoints.channel, wsObjStart)
      // .then(res => {
      //   pusher.unsubscribe(prevChannel);
      //   pusher.subscribe(res.channel).bind(res.event, data => {
      //     dispatch(setTodayStatus(data));
      //   });
      // });
    } else {
      const wsObjStop = {
        start: {
          channel: '',
          market: ''
        },
        stop: prevChannel
      };
      HttpFetch.post(apiEndpoints.channel, wsObjStop)
        .then(res => {
          if (res) {
            pusher.unsubscribe(res.stopChannel);
          }
        });
    }
  };
}
