import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { EditAccounts } from './edit-accounts/edit-accounts';
import { Statistics } from './statistics/statistics';
import { AccountsHistory } from './accounts-history/accounts-history';

export const Accounts = () => {
  return (
    <div className="main">
      <div className="container">
        <Tabs className="main-tabs">
          <TabList className="main-tabs__switcher">
            <Tab className="main-tabs__switcher-item">Accounts editor</Tab>
            <Tab className="main-tabs__switcher-item">Statistics</Tab>
            <Tab className="main-tabs__switcher-item">Accounts history</Tab>
          </TabList>
          <div className="main-tabs__content">
            <TabPanel>
              <EditAccounts/>
            </TabPanel>
            <TabPanel>
              <Statistics/>
            </TabPanel>
            <TabPanel>
              <AccountsHistory/>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
