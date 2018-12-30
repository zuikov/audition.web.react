import React, { Fragment } from 'react';
import { IconXls } from '../../../media/icons';

export const EditContentHead = () => {
  return (
    <Fragment>
      <div className="table-box__head">
        <div className="table-box__title">Edit content</div>
        <a href="#" className="link_export">Export complete playlist item <IconXls/></a>
      </div>
    </Fragment>
  );
};
