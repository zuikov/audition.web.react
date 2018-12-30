import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { changeInput, clearInput } from '../../../redux/actions/search-actions';

class _Number extends Component {
  handleInput = name => e => {
    this.props.changeInput(name, e.target.value);
  };

  handleOrder = () => {
    this.props.clearInput();
  };

  componentDidUpdate() {
    if (this.props.searchBlockNotification === 'success') {
      toast.success('Order was made');
      this.props.clearSuccessMsg();
    } else if (this.props.searchBlockNotification !== '') {
      toast.error(this.props.searchBlockNotification);
      this.props.clearErrorMsg();
    }
  }

  componentWillUnmount() {
    this.props.clearInput();
  }

  render() {
    return (
      <form action="#" className="form-activity">
        <div className="form-activity__fields">
          <div className="form-activity__group">
            <label htmlFor="activity-price" className="form-activity__label">Level</label>
            <div className="form-activity__field">
              <input
                type="number"
                className="form-activity__input"
                value={this.props.priceValue}
                onChange={this.handleInput('priceValue')}
                min="0"
              />
              <span className="form-activity__sticker">{this.props.complexity.replace('ADV_', '')}</span>
            </div>
          </div>
          <div className="form-activity__group">
            <label htmlFor="activity-price" className="form-activity__label">Section number</label>
            <div className="form-activity__field">
              <input
                type="number"
                className="form-activity__input"
                value={this.props.amountValue}
                onChange={this.handleInput('amountValue')}
                min="0"
              />
              <span className="form-activity__sticker">Num</span>
            </div>
          </div>
        </div>
        <div className="activity-block__submit">
          {
            this.props.searchSide
              ? <span className="btn btn_search" onClick={this.handleOrder}>Search</span>
              : <span className="btn btn_clear" onClick={this.handleOrder}>Clear</span>
          }
        </div>
      </form>
    );
  }
}

_Number.propTypes = {
  searchSide: PropTypes.bool,
  complexity: PropTypes.string,
  priceValue: PropTypes.string,
  amountValue: PropTypes.string,
  searchBlockNotification: PropTypes.string
};

const mapStateToProps = (state) => ({
  searchSide: state.searchSide,
  priceValue: state.searchBlock.priceValue,
  amountValue: state.searchBlock.amountValue,
  complexity: state.complexity,
  searchBlockNotification: state.searchBlockNotification
});

const mapDispatchToProps = dispatch => ({
  changeInput: bindActionCreators(changeInput, dispatch),
  clearInput: bindActionCreators(clearInput, dispatch)
});

export const Number = connect(mapStateToProps, mapDispatchToProps)(_Number);
