import React, { Component, Fragment } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';
import { setDateFilter } from '../../../redux/actions/content-actions';

class _DatePickerFilter extends Component {
  constructor() {
    super();

    this.state = {
      fromDate: moment.utc().startOf('year').format('X'),
      toDate: moment.utc().format('X')
    };
  }

  handleChangeStart = e => {
    this.setState({
      fromDate: e.utc().startOf('day').format('X')
    }, () => {
      this.props.setDateFilter(this.state);
    });
  };

  handleChangeEnd = e => {
    this.setState({
      toDate: e.utc().format('X')
    }, () => {
      this.props.setDateFilter(this.state);
    });
  };

  render() {
    const fromDate = moment.unix(this.props.dateFilter.fromDate);
    const toDate = moment.unix(this.props.dateFilter.toDate);
    return (
      <Fragment>
        <div className="filter filter-date">
          <span className="filter-title">Date:</span>
          <DatePicker
            className="filter-date__field"
            selected={fromDate}
            selectsStart
            startDate={fromDate}
            endDate={toDate}
            onChange={this.handleChangeStart}
          />
          <span className="filter_divider">-</span>
          <DatePicker
            className="filter-date__field"
            selected={toDate}
            selectsEnd
            startDate={fromDate}
            endDate={toDate}
            onChange={this.handleChangeEnd}
          />
        </div>
      </Fragment>
    );
  }
}

_DatePickerFilter.propTypes = {
  dateFilter: PropTypes.object
};

const mapStateToProps = state => ({
  dateFilter: state.dateFilter
});

const mapDispatchToProps = dispatch => ({
  setDateFilter: bindActionCreators(setDateFilter, dispatch)
});

export const DatePickerFilter = connect(mapStateToProps, mapDispatchToProps)(_DatePickerFilter);
