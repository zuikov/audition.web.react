import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AccountSecuritySettings } from './account-security-settings';

import './account-info.scss';

const _AccountInfo = props => (
  <div className="account-info profile">
    <div className="profile-head">
      <div className="profile-head__left">
        <div className="profile-head__photo">
          <span className="profile-head__initials">
            {props.givenName.charAt(0)}
            {props.familyName.charAt(0)}
          </span>
        </div>
        <div className="profile-head__info">
          <div className="profile-head__auth-box">
            <div className="profile-head__name">{props.name}</div>
            <span className="profile-head__auth-status">unverified</span>
          </div>
          <div className="profile-head__activities">Last login time: {props.loginHistoryDate[0] ? props.loginHistoryDate[0].date : '2018-03-25 13:07:13'}</div>
        </div>
      </div>
      <div className="profile-head__right">
        <form action="#" className="form">
          <div className="form-switcher__box">
            <div className="form-switcher__descr">Enable some option <span className="font_lighter">(will been added later)</span></div>
            <label className="form-switcher">
              <input type="checkbox" className="form-switcher__field"/>
              <div className="form-switcher__btn"></div>
            </label>
          </div>
        </form>
      </div>
    </div>
    <AccountSecuritySettings/>
  </div>
);

_AccountInfo.defaultProps = {
  givenName: 'John',
  familyName: 'Doe',
  name: 'John Doe',
  loginHistoryDate: [{ date: '2018-03-25 13:07:13' }]
};

_AccountInfo.propTypes = {
  givenName: PropTypes.string,
  familyName: PropTypes.string,
  name: PropTypes.string,
  loginHistoryDate: PropTypes.array
};

const mapStateToProps = ({ login: { givenName, familyName, name }, loginHistory }) => ({
  givenName,
  familyName,
  name,
  loginHistoryDate: loginHistory
});

export const AccountInfo = connect(mapStateToProps)(_AccountInfo);
