import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeInput, clearInput } from '../../../redux/actions/search-actions';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class _Title extends Component {
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

  handleInput = name => e => {
    this.props.changeInput(name, e.target.value);
  };

  handleOrder = () => {
    this.props.clearInput();
  };

  render() {
    return (
      <form action="#" className="form-activity">
        <div className="form-activity__fields">
          <div className="form-activity__group">
            <label htmlFor="activity-price" className="form-activity__label">Key word</label>
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

_Title.propTypes = {
  searchSide: PropTypes.bool,
  amountValue: PropTypes.string,
  complexity: PropTypes.string,
  searchBlockNotification: PropTypes.string
};

const mapStateToProps = (state) => ({
  searchSide: state.searchSide,
  amountValue: state.searchBlock.amountValue,
  complexity: state.complexity,
  searchBlockNotification: state.searchBlockNotification
});

const mapDispatchToProps = dispatch => ({
  changeInput: bindActionCreators(changeInput, dispatch),
  clearInput: bindActionCreators(clearInput, dispatch)
});

export const Title = connect(mapStateToProps, mapDispatchToProps)(_Title);
