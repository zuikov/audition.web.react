import React, { Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class _Audition extends Component {
  componentDidMount() {
  }

  render() {
    const columns = [{
      Header: 'Title',
      accessor: 'title',
      Cell: item => {
        return Number(item.original.amount).toFixed(7).slice(0, 8);
      }
    }, {
      Header: 'Spend time',
      accessor: 'time',
      Cell: item => {
        const sideColor = item.original.side === 'search' ? 'color_green' : 'color_pink';
        return <span className={`${sideColor}`}>{Number(item.original.price).toFixed(7).slice(0, 8)}</span>;
      }
    }, {
      Header: 'Score',
      accessor: 'score'
    }];

    return (

      <div className="activity-info">
        <ReactTable
          className="activity-info__auditions-table"
          data={this.props.playList}
          columns={columns}
          showPagination={false}
          defaultPageSize={10}
          loading={false}
          loadingText=""
        />
        {
          // this.props.playList.length === 0
          //   ? <span>No audition statistics found</span>
          //   : false
        }
      </div>
    );
  }
}

_Audition.propTypes = {
  opeExchange: PropTypes.array
};

const mapStateToProps = state => ({
  openExchange: state.openExchange
});

const mapDispatchToProps = dispatch => ({
});

export const Audition = connect(mapStateToProps, mapDispatchToProps)(_Audition);
