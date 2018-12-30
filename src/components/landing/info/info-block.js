import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Video } from './video';
import { Audition } from './audition';
import './info-block.scss';

class _InfoBlock extends Component {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="exchange-history">
        <Tabs className="exchange__tabs">
          <div className="exchange-header">
            <TabList className="exchange-tab__switch">
              <Tab className="exchange-tab__switch-item">Video</Tab>
              <Tab className="exchange-tab__switch-item">Audition</Tab>
            </TabList>
          </div>
          <div className="exchange-tab-history__content">

            <TabPanel>
              <Video domTableData={this.props.domTableData}/>
            </TabPanel>

            <TabPanel>
              <Audition/>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
  }
}

_InfoBlock.propTypes = {
  domTableData: PropTypes.array,
  complexity: PropTypes.string
};

const mapStateToProps = state => ({
  domTableData: state.domTableData,
  complexity: state.complexity
});

const mapDispatchToProps = dispatch => ({
});

export const InfoBlock = connect(mapStateToProps, mapDispatchToProps)(_InfoBlock);
