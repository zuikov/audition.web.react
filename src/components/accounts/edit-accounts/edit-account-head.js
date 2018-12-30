import React from 'react';

export const EditAccountsHead = () => {
  return (
    <div>
      <div className="main-tabs__head">
        <div className="main-tabs__title">Accounts</div>
        <div className="main-tabs__info">
          <div className="complexity-estimated">
            <span className="complexity-estimated__title">Total accounts: </span>
            <span className="complexity-estimated__count">0</span>
          </div>
          <div className="complexity-status">
            <div className="complexity-status__limit">
              <span className="complexity-status__name">Confirmed: </span>
              <span className="complexity-status__value">0</span>
            </div>
            <div className="complexity-status__use">
              <span className="complexity-status__name">Waiting for confirm: </span>
              <span className="complexity-status__value">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
