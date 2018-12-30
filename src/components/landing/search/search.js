import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Number } from './number';
import { Title } from './title';
import { Description } from './description';
import { SearchButtons } from './search-buttons';

import './search.scss';

class _SearchBlock extends Component {
  render() {
    return (
      <div className='exchange-activity'>
        <div className="activity-block">
          <Tabs className="exchange__tabs">
            <div className="exchange-header">
              <TabList className="exchange-tab__switch">
                <Tab className="exchange-tab__switch-item">Number</Tab>
                <Tab className="exchange-tab__switch-item">Title</Tab>
                <Tab className="exchange-tab__switch-item">Description</Tab>
              </TabList>
            </div>
            <div className={`exchange-tab-activity__content ${this.props.searchSide ? 'bg_search' : 'bg_clear'}`}>

              <SearchButtons/>

              <TabPanel>
                <Number/>
              </TabPanel>

              <TabPanel>
                <Title/>
              </TabPanel>

              <TabPanel>
                <Description/>
              </TabPanel>

            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

_SearchBlock.propTypes = {
  searchSide: PropTypes.bool
};

const mapStateToProps = (state) => ({
  searchSide: state.searchSide
});

export const SearchBlock = connect(mapStateToProps)(_SearchBlock);
