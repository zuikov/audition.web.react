import React, { Fragment } from 'react';
import { IconXls } from '../../../media/icons';

export const ConfigContentHead = () => {
  return (
    <Fragment>
      <div className="table-box__head">
        <div className="table-box__title">Config content</div>
        <a href="/landing/:market" className="link_export">Copy complete playlist item <IconXls/></a>
      </div>
    </Fragment>
  );
};
