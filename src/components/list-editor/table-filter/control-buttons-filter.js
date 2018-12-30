import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchTableFilter,
  setDateFilter,
  setDefaultPairFilter,
  setOffsetNumber,
  setPairFilter, setSideFilter
} from '../../../redux/actions/content-actions';
import { tokens } from '../../../utils/tokens';
import moment from 'moment/moment';

class _ControlFilterButtons extends Component {
  handleSearch = () => {
    if (this.props.filterType === 'auditionsHistory') {
      this.props.setOffsetNumber(0);
      // this.props.clearauditionsHistory();
      this.props.fetchTableFilter(this.props.filterType);
    } else if (this.props.filterType === 'actionHistory') {
      this.props.setOffsetNumber(0);
      this.props.fetchTableFilter(this.props.filterType);
    }
  };

  handleReset = () => {
    this.props.setPairFilter({
      firstPair: tokens.ADV,
      secondPair: tokens.all
    });
    this.props.setDefaultPairFilter();
    this.props.setSideFilter('All');
    this.props.setDateFilter({
      fromDate: moment.utc().startOf('year').format('X'),
      toDate: moment.utc().endOf('day').format('X')
    });
  };

  render() {
    return (
      <Fragment>
        <div className="filter-buttons">
          <button className="filter-btn filter_submit" onClick={this.handleSearch}>Search</button>
          <button className="filter-btn filter_reset" onClick={this.handleReset}>Reset</button>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTableFilter: bindActionCreators(fetchTableFilter, dispatch),
  setOffsetNumber: bindActionCreators(setOffsetNumber, dispatch),
  setPairFilter: bindActionCreators(setPairFilter, dispatch),
  setSideFilter: bindActionCreators(setSideFilter, dispatch),
  setDateFilter: bindActionCreators(setDateFilter, dispatch),
  setDefaultPairFilter: bindActionCreators(setDefaultPairFilter, dispatch)
});

export const ControlFilterButtons = connect(null, mapDispatchToProps)(_ControlFilterButtons);
