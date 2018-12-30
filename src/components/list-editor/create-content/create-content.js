import React, { Fragment } from 'react';
import './create-content.scss';

import { CreateContentsHead } from './create-content-head';
import { CreateContentsBody } from './create-content-body';

export const CreateContent = () => {
  return (
    <Fragment>
      <div className="table-box open-auditions">
        <CreateContentsHead/>
        <CreateContentsBody/>
      </div>
    </Fragment>
  );
};
