import { GET_DOM_TABLE_DATA } from '../constants';
import { store } from '../store';
import { pusher } from '../../utils/pusher';
import { HttpFetch } from '../../utils/http';
import { apiEndpoints } from '../../utils/api-endpoints';

export function domTableData(data) {
  let domData = [];

  if (data !== undefined) {
    data['asks'].map(item => {
      let obj = Object.assign({}, { bid: '', price: +item[0], ask: item[1] });
      domData.push(obj);
    });

    data['bids'].map(item => {
      let obj = Object.assign({}, { bid: item[1], price: +item[0], ask: '' });
      domData.push(obj);
    });
  }

  return {
    type: GET_DOM_TABLE_DATA,
    payload: domData
  };
}

export function fetchDomTableData(wsConnection = false, oldMarketPair = '') {
  return dispatch => {
    const complexity = store.getState().complexity.replace('_', '');
    const prevChannel = `order-depth-${oldMarketPair.replace('_', '')}`;
    if (wsConnection) {
      const wsObjStart = {
        start: {
          channel: 'order-depth',
          market: complexity
        },
        stop: prevChannel
      };
      HttpFetch.get(apiEndpoints.channel, wsObjStart)
        .then(res => {
          pusher.unsubscribe(prevChannel);
          // pusher.subscribe(res.channel).bind(res.event, data => {
          //   dispatch(domTableData(data));
          // });
        });
      // HttpFetch.post(apiEndpoints.channel, wsObjStart)
      // .then(res => {
      //   pusher.unsubscribe(prevChannel);
      //   pusher.subscribe(res.channel).bind(res.event, data => {
      //     dispatch(domTableData(data));
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
          // pusher.unsubscribe(res.channel);
        });
    }
  };
}
