import React, { Component, Fragment } from 'react';
import { IconClose, IconMobile } from '../../media/icons';

export class EnterCode extends Component {
  render() {
    return (
      <Fragment>
        <div className="auth">
          <div className="auth-notify">
            Thanks for creating an account!
            <a href="#" className="auth-notify__close">
              <IconClose/>
            </a>
          </div>
          <div className="inform inform_verify">
            <div className="inform-icon">
              <IconMobile/>
            </div>
            <div className="inform-title">Enter a verification code</div>
            <div className="inform-descr">A text message with a verification code was just sent to xxx-xxx-xx-98. <br/>Enter the code to continue</div>
            <form className="form form-code">
              <input type="text" maxLength="6" className="form-code__field"/>
            </form>
            <div className="inform-helper">
              <div className="inform-helper__text">Didn’t receve the verification code?</div>
              <div className="inform-helper__links">
                <a href="#" className="link">Re-send SMS</a>
                <span className="inform-helper__divider">or</span>
                <a href="#" className="link">Verify Phone Number</a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
