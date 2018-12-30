import React, { Component, Fragment } from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { IconClose } from '../../../media/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { fetchTokenBalance } from '../../../redux/actions/accounts-actions';
import { complexity } from '../../../utils/complexity';

class _StatisticsInformation extends Component {
  state = {
    open: false,
    tokenName: complexity.Fluent,
    copied: false
  };

  componentDidMount() {

  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDropdownValue = (e) => {
    // this.props.fetch...(e.value);
    // this.props.fetch...(e.value);
    this.setState({
      tokenName: e.value
    });
  };

  render() {
    let complexityArray = [];
    Object.keys(complexity).forEach(key => {
      complexityArray.push(complexity[key]);
    });
    return (
      <Fragment>
        <Dropdown className="statistic-dropdown" options={complexityArray.filter(item => item !== 'All')} value={this.state.tokenName} onChange={this.handleDropdownValue} placeholder="Select an option"/>
        <div className="statistic-stat">
          <div className="statistic-stat__row">
            <div className="statistic-stat__name">Total sessions</div>
            <div className="statistic-stat__value">
              {(+this.props.tokenBalance.freeze + +this.props.tokenBalance.available).toFixed(8)}

              {this.state.tokenName}
            </div>
          </div>
          <div className="statistic-stat__row">
            <div className="statistic-stat__name">Total wathing</div>
            <div className="statistic-stat__value">{this.props.tokenBalance.freeze} {this.state.tokenName}</div>
          </div>
          <div className="statistic-stat__row">
            <div className="statistic-stat__name">Total audition</div>
            <div className="statistic-stat__value">{this.props.tokenBalance.available} {this.state.tokenName}</div>
          </div>
        </div>
        <div className="inner">
          <form className="form form-statistic">
            <div className="inner-title">Important</div>
            <div className="inner-descr">Set only appropriate {this.state.tokenName} score to this activity field. Sending any other activities or data
            to this field may mess up statistics.
            </div>
            <div className="form-statistic__group">
              <label className="form-statistic__label" htmlFor="statistic-field">{this.state.tokenName} score</label>
              <div className="form-statistic__field-box">
                <input
                  type="text"
                  id="statistic-field"
                  value={this.props.walletAddress}
                  className="form-statistic__field"
                  readOnly/>
                <CopyToClipboard text={this.props.walletAddress}>
                  <span className="btn btn_copy" onClick={() => toast.success('Score has been copied to clipboard')}>Copy</span>
                </CopyToClipboard>
              </div>
            </div>
            <span className="form-statistic__btn" onClick={this.handleClickOpen}>Show all statistics</span>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              className="modal"
            >
              <span onClick={this.handleClose} className="modal-close">
                <IconClose/>
              </span>
              <DialogContent className="modal-content modal-qr">
                <div className="modal-qr__title">{this.state.tokenName} score</div>
                <div className="modal-qr__box"><QRCode value={this.props.walletAddress}/></div>
                <div className="modal-qr__code">{this.props.walletAddress}</div>
              </DialogContent>
            </Dialog>
          </form>
        </div>
      </Fragment>
    );
  }
}

_StatisticsInformation.propTypes = {
  tokenBalance: PropTypes.object
};

const mapStateToProps = state => ({
  tokenBalance: state.tokenBalance
});

const mapDispatchToProps = dispatch => ({
  fetchTokenBalance: bindActionCreators(fetchTokenBalance, dispatch)
});

export const StatisticsInformation = connect(mapStateToProps, mapDispatchToProps)(_StatisticsInformation);
