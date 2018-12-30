import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './try-audition.scss';

import { ChartCandlestick } from './chart-candlestick';
import { ChartDepth } from './chart-depth';

export const TryAudition = () => {
  return (
    <div className="exchange-chart">
      <div className="charts">
        <Tabs className="exchange__tabs">
          <div className="exchange-header">
            <TabList className="exchange-tab__switch">
              <Tab className="exchange-tab__switch-item">Try audition</Tab>
              <Tab className="exchange-tab__switch-item">Project info</Tab>
            </TabList>
          </div>
          <div className="exchange-tab-chart__content">
            <TabPanel>
              <ChartCandlestick/>
            </TabPanel>

            <TabPanel>
              <ChartDepth/>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
