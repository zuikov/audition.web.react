import React, { Fragment } from 'react';

import './edit-accounts.scss';

import { EditAccountsHead } from './edit-account-head';
import { EditAccountsBody } from './edit-accounts-body';

export const EditAccounts = () => {
  return (
    <Fragment>
      <EditAccountsHead/>
      <EditAccountsBody/>
    </Fragment>
  );
};
