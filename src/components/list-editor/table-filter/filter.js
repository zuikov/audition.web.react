import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { DatePickerFilter } from './datepicker-filter';
import { PairFilter } from './pair-filter';
import { SideFilter } from './side-filter';
import { ControlFilterButtons } from './control-buttons-filter';
import { HideCanceledFilter } from './hide-canceled-filter';

export class TableFilter extends Component {
  render() {
    if (this.props.filterType === 'actionHistory') {
      return (
        <Fragment>
          <div className="filter-box">
            <DatePickerFilter/>
            <PairFilter/>
            <SideFilter/>
            <ControlFilterButtons filterType={this.props.filterType}/>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="filter-box">
            <DatePickerFilter/>
            <PairFilter/>
            <SideFilter/>
            <ControlFilterButtons filterType={this.props.filterType}/>
            <HideCanceledFilter/>
          </div>
        </Fragment>
      );
    }
  }
}

TableFilter.propTypes = {
  filterType: PropTypes.string
};

