import React, { Fragment } from 'react';
import './config-content.scss';

import { ConfigContentHead } from './config-content-head';
import { TableFilter } from '../table-filter/filter';
import { ConfigContentBody } from './config-content-body';

export const ConfigContent = () => {
  return (
    <Fragment>
      <div className="table-box auditions-history">
        <ConfigContentHead/>
        <TableFilter filterType={'actionHistory'}/>
        <ConfigContentBody/>
      </div>
    </Fragment>
  );
};
