import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchLoginHistory } from '../../../redux/actions/account-actions';

import './account-last-login.scss';

class _AccountLastLogin extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="account-lastlogin">
        <div className="account-lastlogin__title">Last login</div>
        <div className="account-lastlogin__box">
          <table className="account-lastlogin__table">
            <thead>
              <tr>
                <th className="data_1">Date</th>
                <th className="data_2">IP Address</th>
                <th className="data_3">Location</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.loginHistory.map(item => {
                  return (
                    <tr key={item.id}>
                      <td className="data_1">{item.date}</td>
                      <td className="data_2">{item.ip}</td>
                      <td className="data_3">{item.location}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

_AccountLastLogin.propTypes = {
  loginHistory: PropTypes.array
};

const mapStateToProps = state => ({
  loginHistory: state.loginHistory
});

const mapDispatchToProps = dispatch => ({
  fetchLoginHistory: bindActionCreators(fetchLoginHistory, dispatch)
});

export const AccountLastLogin = connect(mapStateToProps, mapDispatchToProps)(_AccountLastLogin);
