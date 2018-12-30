import React, { Fragment, Component } from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { setSideFilter } from '../../../redux/actions/content-actions';

class _SideFilter extends Component {
  handleSideFilter = (e) => {
    this.props.setSideFilter(e.value);
  };

  render() {
    const options = [
      'All', 'search', 'clear'
    ];
    return (
      <Fragment>
        <div className="filter filter-side">
          <span className="filter-title">Side:</span>
          <Dropdown
            className="filter_drop"
            options={options}
            value={this.props.sideFilter}
            onChange={this.handleSideFilter}
            placeholder="Select an option"
          />
        </div>
      </Fragment>
    );
  }
}

_SideFilter.propTypes = {
  defaultSideFilter: PropTypes.object,
  sideFilter: PropTypes.string
};

const mapStateToProps = state => ({
  defaultSideFilter: state.defaultSideFilter,
  sideFilter: state.sideFilter
});

const mapDispatchToProps = dispatch => ({
  setSideFilter: bindActionCreators(setSideFilter, dispatch)
});

export const SideFilter = connect(mapStateToProps, mapDispatchToProps)(_SideFilter);
