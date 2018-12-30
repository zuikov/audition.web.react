import React, { Fragment, Component } from 'react';
import 'amcharts3/amcharts/amcharts';
import AmCharts from '@amcharts/amcharts3-react';
import 'amcharts3/amcharts/serial';
import 'amstock3/amcharts/amstock';
import 'amcharts3/amcharts/plugins/dataloader/dataloader.min';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './chart.scss';
import { ChartIntervalButtons } from './chart-interval-buttons';
import { fetchCandlestickChartData, setMinuteInterval } from '../../../redux/actions/charts-actions';
import { intervalButton } from '../../../utils/interval-button-names';

class _ChartCandlestickOld extends Component {
  componentDidMount() {
    // if (this.props.getChartInterval.mInterval || this.props.getChartInterval.hInterval || this.props.getChartInterval.wInterval) {
    //   this.props.fetchCandlestickChartData(true, this.props.marketPair, this.props.getChartInterval.mInterval || this.props.getChartInterval.hInterval || this.props.getChartInterval.wInterval);
    // } else {
    //   this.props.setMinuteInterval(intervalButton['15minutes']);
    //   this.props.fetchCandlestickChartData(true, this.props.marketPair, intervalButton['15minutes']);
    // }
  }

  componentWillUnmount() {
    // this.props.fetchCandlestickChartData(false, this.props.marketPair);
  }

  getInterval = timeInterval => {
    switch (timeInterval) {
      case intervalButton['15minutes']:
        return '15mm';
      case intervalButton['30minutes']:
        return '30mm';
      case intervalButton['1hour']:
        return '1hh';
      case intervalButton['24hours']:
        return '24hh';
      case intervalButton['1week']:
        return '1WW';
      default:
        return '15mm';
    }
  };

  render() {
    return (
      <Fragment>
        <ChartIntervalButtons/>
        <AmCharts.React
          className="my-class"
          style={{
            width: '100%',
            height: '500px'
          }}
          options={{
            type: 'stock',
            theme: 'light',
            mouseWheelZoomEnabled: true,
            categoryAxesSettings: {
              minPeriod: this.getInterval(this.props.timeInterval),
              parseDates: true
            },
            dataSets: [{
              fieldMappings: [{
                fromField: 'open',
                toField: 'open'
              }, {
                fromField: 'close',
                toField: 'close'
              }, {
                fromField: 'high',
                toField: 'high'
              }, {
                fromField: 'low',
                toField: 'low'
              }, {
                fromField: 'volume',
                toField: 'volume'
              }, {
                fromField: 'value',
                toField: 'value'
              }],
              color: '#4da53c',
              dataProvider: this.props.candleData,
              categoryField: 'date'
            }],
            balloon: {
              horizontalPadding: 13
            },
            panels: [{
              title: 'Value',
              percentHeight: 70,
              stockGraphs: [{
                id: 'g1',
                type: 'candlestick',
                openField: 'open',
                closeField: 'close',
                highField: 'high',
                lowField: 'low',
                valueField: 'close',
                lineColor: '#4da53c',
                fillColors: '#4da53c',
                negativeLineColor: '#ea3571',
                negativeFillColors: '#ea3571',
                fillAlphas: 1,
                balloonText: 'open:<b>[[open]]</b><br>close:<b>[[close]]</b><br>low:<b>[[low]]</b><br>high:<b>[[high]]</b>',
                useDataSetColors: false,
                fixedColumnWidth: 10
              }]
            }, {
              title: 'Volume',
              percentHeight: 30,
              marginTop: 1,
              columnWidth: 0.6,
              showCategoryAxis: false,
              stockGraphs: [{
                valueField: 'volume',
                openField: 'open',
                type: 'column',
                showBalloon: false,
                fillAlphas: 1,
                lineColorField: 'color',
                fillColorsField: 'color',
                useDataSetColors: false,
                fixedColumnWidth: 10
              }],

              stockLegend: {
                markerType: 'none',
                markerSize: 0,
                labelText: '',
                periodValueTextRegular: '[[value.close]]'
              },

              valueAxes: [{
                usePrefixes: true
              }]
            }],
            scrollBarSettings: {
              graphType: 'line',
              usePeriod: 'WW'
            },
            panelsSettings: {
              panEventsEnabled: true,
              plotAreaFillColors: '#fff',
              plotAreaFillAlphas: 1,
              marginLeft: 60,
              marginTop: 5,
              marginBottom: 5
            },
            chartScrollbarSettings: {
              enabled: false
            },
            valueAxesSettings: {
              inside: false,
              showLastLabel: true
            },
            cursorSettings: {
              valueBalloonsEnabled: true,
              valueLineBalloonEnabled: true,
              valueLineEnabled: true
            }
          }}/>
      </Fragment>
    );
  }
}

_ChartCandlestickOld.propTypes = {
  candleData: PropTypes.array,
  timeInterval: PropTypes.string,
  complexity: PropTypes.string,
  getChartInterval: PropTypes.object
};

const mapStateToProps = state => ({
  candleData: state.candlestickData.candleData,
  timeInterval: state.candlestickData.timeInterval,
  complexity: state.complexity,
  getChartInterval: state.getChartInterval
});

const mapDispatchToProps = dispatch => ({
  fetchCandlestickChartData: bindActionCreators(fetchCandlestickChartData, dispatch),
  setMinuteInterval: bindActionCreators(setMinuteInterval, dispatch)
});

export const ChartCandlestickOld = connect(mapStateToProps, mapDispatchToProps)(_ChartCandlestickOld);
