import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import { fetchPlayList } from '../../redux/actions/content-actions';
import './playlist.scss';

class _PlayList extends Component {
  componentDidMount() {
    this.props.fetchPlayList();
  }

  render() {
    return (
      <div className="complexity-body">
        <div className="complexity-body__top">
          <table className="playlist__table">
            <thead>
              <tr>
                <th className="data_1">Section number</th>
                <th className="data_2">Level</th>
                <th className="data_3">Title</th>
                <th className="data_4">Description</th>
                <th className="data_3">Video</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.playList.map(item => {
                  return (
                    <tr key={item._id}>
                      <td className="data_1">{item.sectionNumber}</td>
                      <td className="data_2">{item.sectionName}</td>
                      <td className="data_3">{item.title}</td>
                      <td className="data_4">{item.description}</td>
                      <td className="data_3"><iframe width="320" src={item.link} title={item.title} frameBorder="0" allow="autoplay; encrypted-media"></iframe></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

_PlayList.propTypes = {
  playlist: PropTypes.array
};

const mapStateToProps = state => ({
  playList: state.playList
});

const mapDispatchToProps = dispatch => ({
  fetchPlayList: bindActionCreators(fetchPlayList, dispatch)
});

export const PlayList = connect(mapStateToProps, mapDispatchToProps)(_PlayList);

