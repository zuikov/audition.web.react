import React from 'react';

import { AccountLastLogin } from './account-last-login/account-last-login';
import { AccountInfo } from './account-info/account-info';
import { AccountNotify } from './account-notify/account-notify';
import { AccountHead } from './account-head/account-head';

import './account.scss';

export const Account = () => {
  return (
    <div className="account">
      <div className="container">
        <AccountNotify/>
        <AccountHead/>
        <AccountInfo/>
        <AccountLastLogin/>
      </div>
    </div>
  );
};
