import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import 'amstock3/amcharts/amstock';

import { apiEndpoints } from '../../../utils/api-endpoints';

export const ChartDepth = () => {
  return (
    <AmCharts.React
      style={{
        width: '100%',
        height: '500px'
      }}
      options={{
        'type': 'serial',
        'theme': 'light',
        'color': '#c7cce6a6',
        'dataLoader': {
          'url': apiEndpoints.depthChart,
          'format': 'json',
          'reload': 7,
          'postProcess': function (data) {
            // return data;
            let res = [];

            // Function to process (sort and calculate cummulative volume)
            function processData(list, type, desc) {
              // Convert to data points
              for (let i = 0; i < list.length; i++) {
                list[i] = {
                  value: Number(list[i][0]),
                  volume: Number(list[i][1])
                };
              }

              // Sort list just in case
              list.sort(function (a, b) {
                if (a.value > b.value) {
                  return 1;
                } else if (a.value < b.value) {
                  return -1;
                } else {
                  return 0;
                }
              });

              // Calculate cummulative volume
              if (desc) {
                for (let i = list.length - 1; i >= 0; i--) {
                  if (i < (list.length - 1)) {
                    list[i].totalvolume = list[i + 1].totalvolume + list[i].volume;
                  } else {
                    list[i].totalvolume = list[i].volume;
                  }
                  let dp = {};
                  dp['value'] = list[i].value;
                  dp[type + 'volume'] = list[i].volume;
                  dp[type + 'totalvolume'] = list[i].totalvolume;
                  res.unshift(dp);
                }
              } else {
                for (let i = 0; i < list.length; i++) {
                  if (i > 0) {
                    list[i].totalvolume = list[i - 1].totalvolume + list[i].volume;
                  } else {
                    list[i].totalvolume = list[i].volume;
                  }
                  let dp = {};
                  dp['value'] = list[i].value;
                  dp[type + 'volume'] = list[i].volume;
                  dp[type + 'totalvolume'] = list[i].totalvolume;
                  res.push(dp);
                }
              }
            }

            // Init
            processData(data.bids, 'bids', true);
            processData(data.asks, 'asks', false);

            return res;
          }
        },
        'graphs': [{
          'id': 'bids',
          'fillAlphas': 0.1,
          'lineAlpha': 1,
          'lineThickness': 2,
          'lineColor': '#0f0',
          'type': 'step',
          'valueField': 'bidstotalvolume'
        }, {
          'id': 'asks',
          'fillAlphas': 0.1,
          'lineAlpha': 1,
          'lineThickness': 2,
          'lineColor': '#f00',
          'type': 'step',
          'valueField': 'askstotalvolume'
        }, {
          'lineAlpha': 0,
          'fillAlphas': 0.2,
          'lineColor': '#000',
          'type': 'column',
          'clustered': false,
          'valueField': 'bidsvolume',
          'showBalloon': false
        }, {
          'lineAlpha': 0,
          'fillAlphas': 0.2,
          'lineColor': '#000',
          'type': 'column',
          'clustered': false,
          'valueField': 'asksvolume',
          'showBalloon': false
        }],
        'categoryField': 'value',
        'chartCursor': {},
        'balloon': {
          'textAlign': 'left'
        },
        'valueAxes': [{
          'title': 'Volume'
        }],
        'categoryAxis': {
          'title': 'Amount',
          'minHorizontalGap': 100,
          'startOnAxis': true,
          'showFirstLabel': false,
          'showLastLabel': false
        },
        'export': {
          'enabled': false
        }
      }}
    />
  );
};
