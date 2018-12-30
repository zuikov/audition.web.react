import React, { Fragment, Component } from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { tokens } from '../../../utils/tokens';
import { setPairFilter } from '../../../redux/actions/content-actions';

class _PairFilter extends Component {
  pairFilter = {
    firstPair: tokens.MKT,
    secondPair: tokens.all
  };

  handleFirstPair = (e) => {
    this.pairFilter.firstPair = e.value;
    this.props.setPairFilter(this.pairFilter);
  };

  handleSecondPair = (e) => {
    this.pairFilter.secondPair = e.value;
    this.props.setPairFilter(this.pairFilter);
  };

  render() {
    let tokensArray = [];
    Object.keys(tokens).forEach(key => {
      tokensArray.push(tokens[key]);
    });
    return (
      <Fragment>
        <div className="filter filter-pair">
          <span className="filter-title">Pair:</span>
          <Dropdown
            className="filter_drop"
            options={tokensArray}
            value={this.props.defaultPairFilter.firstPair}
            onChange={this.handleFirstPair}
            placeholder="Select an option"
            disabled
          />
          <span className="filter_divider">/</span>
          <Dropdown
            className="filter_drop"
            options={tokensArray.filter(item => item !== 'MKT')}
            value={this.props.defaultPairFilter.secondPair}
            onChange={this.handleSecondPair}
            placeholder="Select an option"
          />
        </div>
      </Fragment>
    );
  }
}

_PairFilter.propsTypes = {
  defaultPairFilter: PropTypes.object
};

const mapStateToProps = state => ({
  defaultPairFilter: state.defaultPairFilter
});

const mapDispatchToProps = dispatch => ({
  setPairFilter: bindActionCreators(setPairFilter, dispatch)
});

export const PairFilter = connect(mapStateToProps, mapDispatchToProps)(_PairFilter);
