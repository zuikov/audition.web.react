import React, { Fragment } from 'react';
import { IconApi, IconPassword } from '../../../media/icons';

export const AccountSecuritySettings = () => {
  return (
    <Fragment>
      <div className="profile-section">
        <div className="profile-section__left">
          <div className="profile-section__icon">
            <IconPassword/>
          </div>
          <div className="profile-section__info">
            <div className="profile-section__name">Password</div>
            <div className="profile-section__descr">Used for login</div>
          </div>
        </div>
        <div className="profile-section__right">
          <a href="#" className="btn btn_white btn_full-width">Change</a>
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-section__left">
          <div className="profile-section__icon">
            ico
          </div>
          <div className="profile-section__info">
            <div className="profile-section__name">SMS Authentication</div>
            <div className="profile-section__descr">Used for withdrawals and security modifications</div>
          </div>
        </div>
        <div className="profile-section__right">
          <a href="#" className="btn btn_blue btn_full-width">Enable</a>
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-section__left">
          <div className="profile-section__icon">
            <IconApi/>
          </div>
          <div className="profile-section__info">
            <div className="profile-section__name">Google Authentication</div>
            <div className="profile-section__descr">Used for login</div>
          </div>
        </div>
        <div className="profile-section__right">
          <a href="#" className="btn btn_blue btn_full-width">enable</a>
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-section__left">
          <div className="profile-section__icon">
            <IconApi/>
          </div>
          <div className="profile-section__info">
            <div className="profile-section__name">API</div>
            <div className="profile-section__descr">Creating API private key can get you access to market, real-time trading services on Miokado via a third-party website or mobile APP. <a href="#" className="link">API
              documentation.</a></div>
          </div>
        </div>
        <div className="profile-section__right">
          <a href="#" className="btn btn_blue btn_full-width">Enable</a>
        </div>
      </div>
    </Fragment>
  );
};
