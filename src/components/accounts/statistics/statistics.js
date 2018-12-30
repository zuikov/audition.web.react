import React, { Fragment } from 'react';
import './statistics.scss';

import { StatisticsInformation } from './statistics-information';
import { StatisticsHistory } from './statistics-history';

export const Statistics = () => {
  return (
    <Fragment>
      <div className="statistic">
        <div className="main-tabs__head statistic-head">
          <div className="main-tabs__title statistic-title">Statistics</div>
        </div>
        <div className="main-tabs__body statistic-body">
          <div className="main-tabs__column">
            <StatisticsInformation/>
          </div>
          <div className="main-tabs__column">
            <StatisticsHistory/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
