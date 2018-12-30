import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';

import { fetchCandlestickChartData, setHourInterval, setMinuteInterval, setWeekInterval } from '../../../redux/actions/charts-actions';
import { intervalButton } from '../../../utils/interval-button-names';

class _ChartIntervalButtons extends Component {
  formatInterval = (timeInterval) => {
    switch (timeInterval) {
      case intervalButton['15minutes']:
        return '15M';
      case intervalButton['30minutes']:
        return '30M';
      case intervalButton['1hour']:
        return '1H';
      case intervalButton['24hours']:
        return '24H';
      case intervalButton['1week']:
        return '1W';
      default:
        return false;
    }
  };

  render() {
    const minutes = [
      <button key={1} id={`${intervalButton['15minutes']}`}>15M</button>,
      <button key={2} id={`${intervalButton['30minutes']}`}>30M</button>
    ];
    const hours = [
      <button key={3} id={`${intervalButton['1hour']}`}>1H</button>,
      <button key={4} id={`${intervalButton['24hours']}`}>24H</button>
    ];
    return (
      <Fragment>
        <div className="chart-control">
          <div className="chart-control__title">Time</div>
          <Dropdown
            className={`chart-control__drop ${this.props.getChartInterval.mInterval ? 'active-interval' : ''}`}
            value={this.formatInterval(this.props.getChartInterval.mInterval) ? this.formatInterval(this.props.getChartInterval.mInterval) : 'm'}
            onChange={(e) => {
              this.props.setMinuteInterval(e);
              this.props.fetchCandlestickChartData(true, this.props.marketPair, e.label.props.id,
                this.props.getChartInterval.mInterval || this.props.getChartInterval.hInterval || this.props.getChartInterval.wInterval);
            }}
            options={minutes}
          />
          <Dropdown
            className={`chart-control__drop ${this.props.getChartInterval.hInterval ? 'active-interval' : ''}`}
            value={this.formatInterval(this.props.getChartInterval.hInterval) ? this.formatInterval(this.props.getChartInterval.hInterval) : 'h'}
            onChange={(e) => {
              this.props.setHourInterval(e);
              this.props.fetchCandlestickChartData(true, this.props.marketPair, e.label.props.id,
                this.props.getChartInterval.mInterval || this.props.getChartInterval.hInterval || this.props.getChartInterval.wInterval);
            }}
            options={hours}
          />
          <button
            className={`chart-control__btn ${this.props.getChartInterval.wInterval ? 'active-interval' : ''}`}
            onClick={(e) => {
              this.props.setWeekInterval(e);
              this.props.fetchCandlestickChartData(true, this.props.marketPair, e.target.id,
                this.props.getChartInterval.mInterval || this.props.getChartInterval.hInterval || this.props.getChartInterval.wInterval);
            }}
            id={`${intervalButton['1week']}`}
          >1W
          </button>
        </div>
      </Fragment>
    );
  }
}

_ChartIntervalButtons.propTypes = {
  complexity: PropTypes.string,
  getChartInterval: PropTypes.object
};

const mapStateToProps = state => ({
  complexity: state.complexity,
  getChartInterval: state.getChartInterval
});

const mapDispatchToProps = dispatch => ({
  fetchCandlestickChartData: bindActionCreators(fetchCandlestickChartData, dispatch),
  setMinuteInterval: bindActionCreators(setMinuteInterval, dispatch),
  setHourInterval: bindActionCreators(setHourInterval, dispatch),
  setWeekInterval: bindActionCreators(setWeekInterval, dispatch)
});

export const ChartIntervalButtons = connect(mapStateToProps, mapDispatchToProps)(_ChartIntervalButtons);
