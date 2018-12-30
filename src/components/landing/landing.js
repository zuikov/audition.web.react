import React, { Component } from 'react';

import { SearchBlock } from './search/search';
import { InfoBlock } from './info/info-block';
import { TryAudition } from './try-audition/try-audition';

import './landing.scss';

export class Landing extends Component {
  render() {
    return (
      <div className='exchange'>
        <SearchBlock/>
        <TryAudition/>
        <InfoBlock/>
      </div>
    );
  }
}
