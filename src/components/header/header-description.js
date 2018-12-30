import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { setComplexity } from '../../redux/actions/info-actions';
import { complexity } from '../../utils/complexity';
import { fetchCandlestickChartData, fetchMiniChartData } from '../../redux/actions/charts-actions';
import { MiniChart } from './mini-chart';

class _HeaderDescription extends Component {
  componentDidMount() {
    const url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    this.props.setComplexity(url);
    this.props.fetchCandlestickChartData(true, url, this.props.candlestickData.timeInterval, this.props.getChartInterval.mInterval || this.props.getChartInterval.hInterval || this.props.getChartInterval.wInterval);
    this.props.fetchMiniChartData();
  }

  componentWillUnmount() {
  }

  handleDropdown = (e) => {
    const value = e.value.replace('/', '_');
    this.props.setComplexity(value);
    this.props.fetchCandlestickChartData(true, this.props.complexity, this.props.candlestickData.timeInterval, this.props.getChartInterval.mInterval || this.props.getChartInterval.hInterval || this.props.getChartInterval.wInterval);
    this.props.fetchMiniChartData();
  };

  color = () => {
    if (this.props.todayStatusData.change !== undefined && Number.parseInt(this.props.todayStatusData.change.slice(0, -1)) > 0) {
      return 'color_green';
    } else {
      return 'color_pink';
    }
  };

  render() {
    return (
      <div className="header-statistics">
        <Dropdown
          className="header-statistics__name"
          options={complexity}
          value={window.location.href.substring(window.location.href.lastIndexOf('/') + 1).replace('_', '/')}
          onChange={this.handleDropdown}
          placeholder="Select an option"
        />
        <MiniChart/>
        <div className="header-statistics__info">
          <div className="header-statistics__item">
            <div className="header-statistics__title">Last video</div>
            <div className="header-statistics__value">{this.props.todayStatusData.last}</div>
          </div>
          <div className="header-statistics__item">
            <div className="header-statistics__title">Recent additions</div>
            <div
              className={`header-statistics__value ${this.color()}`}>
              {this.props.todayStatusData.change}</div>
          </div>
          <div className="header-statistics__item">
            <div className="header-statistics__title">High rate</div>
            <div className="header-statistics__value">{this.props.todayStatusData.high}</div>
          </div>
          <div className="header-statistics__item">
            <div className="header-statistics__title">Low rate</div>
            <div className="header-statistics__value">{this.props.todayStatusData.low}</div>
          </div>
          <div className="header-statistics__item">
            <div className="header-statistics__title">Statistics</div>
            <div className="header-statistics__value">{this.props.todayStatusData.volume} {this.props.complexity.replace('ADV_', '')}</div>
          </div>
        </div>
      </div>
    );
  }
}

_HeaderDescription.propTypes = {
  complexity: PropTypes.string,
  timeInterval: PropTypes.string,
  todayStatusData: PropTypes.object,
  candlestickData: PropTypes.object,
  getChartInterval: PropTypes.object
};

const mapStateToProps = state => ({
  complexity: state.complexity,
  timeInterval: state.candlestickData.timeInterval,
  todayStatusData: state.todayStatus,
  candlestickData: state.candlestickData,
  getChartInterval: state.getChartInterval
});

const mapDispatchToProps = dispatch => ({
  setComplexity: bindActionCreators(setComplexity, dispatch),
  fetchCandlestickChartData: bindActionCreators(fetchCandlestickChartData, dispatch),
  fetchMiniChartData: bindActionCreators(fetchMiniChartData, dispatch)
});

export const HeaderDescription = connect(mapStateToProps, mapDispatchToProps)(_HeaderDescription);
