import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchForm, clearForm } from '../../../redux/actions/search-actions';

const _SearchButtons = props => {
  return (
    <div className="activity-block__btn">
      <button
        id="search-btn"
        className={`activity-block__btn-item ${props.btnState ? 'activity-block__btn_active-search' : ''}`}
        onClick={props.handleSearch}>
        search
      </button>

      <button
        id="clear-btn"
        className={`activity-block__btn-item ${props.btnState ? '' : 'activity-block__btn_active-clear'}`}
        onClick={props.handleClear}>
        clear
      </button>
    </div>
  );
};

_SearchButtons.propTypes = {
  btnState: PropTypes.bool
};

const mapStateToProps = (state) => ({
  btnState: state.searchSide
});

const mapDispatchToProps = dispatch => ({
  handleSearch: bindActionCreators(searchForm, dispatch),
  handleClear: bindActionCreators(clearForm, dispatch)
});

export const SearchButtons = connect(mapStateToProps, mapDispatchToProps)(_SearchButtons);
