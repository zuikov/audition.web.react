import { GET_CANDLESTICK_CHART_DATA, GET_MINI_CHART_DATA, SET_HOUR_INTERVAL, SET_MINUTE_INTERVAL, SET_WEEK_INTERVAL } from '../constants';
import { apiEndpoints } from '../../utils/api-endpoints';
import { intervalButton } from '../../utils/interval-button-names';
import { HttpFetch } from '../../utils/http';
import { store } from '../store';
import { pusher } from '../../utils/pusher';

export function setMinuteInterval(interval) {
  const mInterval = interval.label === undefined ? interval : interval.label.props.id;
  return {
    type: SET_MINUTE_INTERVAL,
    payload: {
      mInterval: mInterval,
      hInterval: false,
      wInterval: false
    }
  };
}

export function setHourInterval(interval) {
  return {
    type: SET_HOUR_INTERVAL,
    payload: {
      mInterval: false,
      hInterval: interval.label.props.id,
      wInterval: false
    }
  };
}

export function setWeekInterval(interval) {
  return {
    type: SET_WEEK_INTERVAL,
    payload: {
      mInterval: false,
      hInterval: false,
      wInterval: interval.target.id
    }
  };
}

export function getCandlestickChartData(candleData, timeInterval) {
  return {
    type: GET_CANDLESTICK_CHART_DATA,
    payload: {
      candleData,
      timeInterval
    }
  };
}

export function fetchCandlestickChartData(wsConnection = false, previousMarketPair = '', timeInterval, previousTimeInterval) {
  return dispatch => {
    const getInterval = (timeInterval) => {
      switch (timeInterval) {
        case intervalButton['15minutes']:
          return 900;
        case intervalButton['30minutes']:
          return 1800;
        case intervalButton['1hour']:
          return 3600;
        case intervalButton['24hours']:
          return 86400;
        case intervalButton['1week']:
          return 604800;
        default:
          return 900;
      }
    };
    const getRange = (interval) => {
      switch (interval) {
        case 900:
          return 86400 / 2;
        case 1800:
          return 86400 / 2;
        case 3600:
          return 604800 / 4;
        case 86400:
          return 2592000;
        case 604800:
          return 2592000;
        default:
          return 900;
      }
    };
    const interval = getInterval(timeInterval);
    const range = getRange(interval);

    const previousInterval = getInterval(previousTimeInterval);
    const previousRange = getRange(previousInterval);

    const complexity = store.getState().complexity.replace('_', '');
    const previousChannel = `order-candlestick-${previousMarketPair.replace('_', '')}-${previousRange}-${previousInterval}`;

    if (wsConnection) {
      const wsObjStart = {
        start: {
          channel: 'order-candlestick',
          market: complexity,
          range,
          interval
        },
        stop: previousChannel
      };

      HttpFetch.get(apiEndpoints.channel, wsObjStart)
        .then(res => {
          // console.log('playlist', res);
          pusher.unsubscribe(previousChannel);
          // pusher.subscribe(res.channel).bind(res.event, data => {
          //   dispatch(getCandlestickChartData(data, timeInterval));
          // });
        });
      // HttpFetch.post(apiEndpoints.channel, wsObjStart)
      // .then(res => {
      //   pusher.unsubscribe(previousChannel);
      //   pusher.subscribe(res.channel).bind(res.event, data => {
      //     dispatch(getCandlestickChartData(data, timeInterval));
      //   });
      // });
    } else {
      const wsObjStop = {
        start: {
          channel: '',
          market: ''
        },
        stop: previousChannel
      };

      HttpFetch.get(apiEndpoints.channel, wsObjStop)
        .then(res => {
          if (res) {
            pusher.unsubscribe(res.channel);
          }
        });
      // HttpFetch.post(apiEndpoints.channel, wsObjStop)
      // .then(res => {
      //   pusher.unsubscribe(res.channel);
      // });
    }
  };
}

export function getMiniChartData(miniChartData) {
  return {
    type: GET_MINI_CHART_DATA,
    payload: miniChartData
  };
}

export function fetchMiniChartData() {
  return dispatch => {
    HttpFetch.get(apiEndpoints.miniChart, true)
      .then(res => {
        dispatch(getMiniChartData(res));
      });
  };
}
