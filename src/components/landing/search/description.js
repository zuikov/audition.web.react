import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { changeInput, clearInput } from '../../../redux/actions/search-actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class _Description extends Component {
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
                value={this.props.stopValue}
                onChange={this.handleInput('stopValue')}
                min="0"
              />
              <span className="form-activity__sticker">{this.props.complexity.replace('ADV_', '')}</span>
            </div>
          </div>
          <div className="form-activity__group">
            <label htmlFor="activity-price" className="form-activity__label">Level</label>
            <div className="form-activity__field">
              <input
                type="number"
                className="form-activity__input"
                value={this.props.limitValue}
                onChange={this.handleInput('limitValue')}
                min="0"
              />
              <span className="form-activity__sticker">{this.props.complexity.replace('ADV_', '')}</span>
            </div>
          </div>
          <div className="form-activity__group">
            <label htmlFor="activity-price" className="form-activity__label">Key words</label>
            <div className="form-activity__field">
              <input
                type="number"
                className="form-activity__input"
                value={this.props.amountValue}
                onChange={this.handleInput('amountValue')}
                min="0"
              />
              <span className="form-activity__sticker">num</span>
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

_Description.propTypes = {
  searchSide: PropTypes.bool,
  complexity: PropTypes.string,
  amountValue: PropTypes.string,
  stopValue: PropTypes.string,
  limitValue: PropTypes.string,
  searchBlockNotification: PropTypes.string
};

const mapStateToProps = (state) => ({
  searchSide: state.searchSide,
  amountValue: state.searchBlock.amountValue,
  stopValue: state.searchBlock.stopValue,
  limitValue: state.searchBlock.limitValue,
  complexity: state.complexity,
  searchBlockNotification: state.searchBlockNotification
});

const mapDispatchToProps = dispatch => ({
  changeInput: bindActionCreators(changeInput, dispatch),
  clearInput: bindActionCreators(clearInput, dispatch)
});

export const Description = connect(mapStateToProps, mapDispatchToProps)(_Description);
