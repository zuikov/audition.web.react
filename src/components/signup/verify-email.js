import React, { Component, Fragment } from 'react';
import { IconClose, IconDesktop } from '../../media/icons';

export class VerifyEmail extends Component {
  render() {
    return (
      <Fragment>
        <div className="auth">
          <div className="auth-notify">
            Thanks for creating an account!
            <a href="/landing/:market" className="auth-notify__close">
              <IconClose/>
            </a>
          </div>
          <div className="inform code-box">
            <div className="inform-icon">
              <IconDesktop/>
            </div>
            <div className="inform-title">Verify Your Email</div>
            <div className="inform-descr">We sent a verification email <a href="mailto:info@client.com" className="link">info@client.com</a> <br/>Click the link in the email to get started!</div>
            <div className="inform-divider"></div>
            <div className="inform-helper">
              <div className="inform-helper__links">
                <a href="/landing/:market" className="link">Email didn’t arrive or want to use a different email?</a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
