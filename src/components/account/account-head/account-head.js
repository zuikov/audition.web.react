import React from 'react';

import './account-head.scss';

export const AccountHead = () => {
  return (
    <div className="account-head">
      <div className="account-head__title">Account</div>
      <div className="account-head__button-box">
        <a href="/landing/:market" className="btn btn_blue">verify account</a>
      </div>
    </div>
  );
};
