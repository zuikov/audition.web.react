import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './list-editor.scss';

import { CreateContent } from './create-content/create-content';
import { EditContent } from './edit-content/edit-content';
import { ConfigContent } from './config-content/config-content';

export const ListEditor = () => {
  return (
    <div className="main">
      <div className="container">
        <Tabs className="main-tabs">
          <TabList className="main-tabs__switcher">
            <Tab className="main-tabs__switcher-item">Create content</Tab>
            <Tab className="main-tabs__switcher-item">Edit content</Tab>
            <Tab className="main-tabs__switcher-item">Config content</Tab>
          </TabList>

          <div className="main-tabs__content">
            <TabPanel>
              <CreateContent/>
            </TabPanel>

            <TabPanel>
              <EditContent/>
            </TabPanel>

            <TabPanel>
              <ConfigContent/>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
