import React, { Fragment } from 'react';
import './edit-content.scss';

import { EditContentHead } from './edit-content-head';
import { TableFilter } from '../table-filter/filter';
import { EditContentBody } from './edit-content-body';

export const EditContent = () => {
  return (
    <Fragment>
      <div className="table-box auditions-history">
        <EditContentHead/>
        <TableFilter filterType={'auditionsHistory'}/>
        <EditContentBody/>
      </div>
    </Fragment>
  );
};
