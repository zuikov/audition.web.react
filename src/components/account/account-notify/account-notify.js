import React from 'react';

import './account-notify.scss';
import { IconClose } from '../../../media/icons';

export const AccountNotify = () => {
  return (
    <div className="account-notify">
      <a href="/landing/:market" className="link">Security Recommendations: </a> Check the visit URL, Enable 2-FA, Do not disclose password.
      <a href="/landing/:market" className="account-notify__close">
        <IconClose/>
      </a>
    </div>
  );
};
