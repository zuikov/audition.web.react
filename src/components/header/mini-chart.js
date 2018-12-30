import React, { Component } from 'react';
import 'amcharts3/amcharts/amcharts';
import AmCharts from '@amcharts/amcharts3-react';
import 'amcharts3/amcharts/serial';
import 'amstock3/amcharts/amstock';
import 'amcharts3/amcharts/plugins/dataloader/dataloader.min';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchMiniChartData } from '../../redux/actions/charts-actions';

class _MiniChart extends Component {
  componentDidMount() {
    this.props.fetchMiniChartData();
  }

  render() {
    return (
      <AmCharts.React
        className='header-statistics__chart'
        style={{
          width: '150px',
          height: '80px',
          marginBottom: '10px'
        }}
        options={{
          type: 'serial',
          theme: 'light',
          autoMarginOffset: 20,
          marginTop: 20,
          dataProvider: this.props.miniChartData,
          categoryAxesSettings: {
            minPeriod: '30mm',
            parseDates: true
          },
          valueAxes: [{
            axisAlpha: 0,
            dashLength: 0,
            position: 'left',
            labelsEnabled: false,
            gridThickness: 0
          }],
          mouseWheelZoomEnabled: false,
          areasSettings: {
            alpha: 0
          },
          graphs: [{
            id: 'g1',
            valueField: 'average',
            lineColor: '#01afc4',
            balloon: {
              showBalloon: false
            }
          }],
          categoryField: 'date',
          categoryAxis: {
            labelsEnabled: false,
            parseDates: false,
            axisColor: '#fff',
            dashLength: 0,
            minorGridEnabled: false,
            gridThickness: 0
          }
        }}/>
    );
  }
}

_MiniChart.propTypes = {
  miniChartData: PropTypes.array
};

const mapStateToProps = state => ({
  miniChartData: state.getMiniChartData
});

const mapDispatchToProps = dispatch => ({
  fetchMiniChartData: bindActionCreators(fetchMiniChartData, dispatch)
});

export const MiniChart = connect(mapStateToProps, mapDispatchToProps)(_MiniChart);
