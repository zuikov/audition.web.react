import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

export const Video = props => {
  const columns = [{
    Header: 'Title',
    accessor: 'title',
    Cell: item => {
      if (item.original.title !== '') {
        return Number(item.original.bid).toFixed(4);
      }
    }
  }, {
    Header: 'Viewership',
    accessor: 'viewership'
  }, {
    Header: 'Score',
    accessor: 'score',
    Cell: item => {
      if (item.original.score !== '') {
        return Number(item.original.ask).toFixed(4);
      }
    }
  }];

  return (
    <div className="activity-info">
      <ReactTable
        className="activity-info__table"
        data={props.domTableData}
        columns={columns}
        showPagination={false}
        defaultPageSize={21}
        loading={false}
        loadingText=""
        defaultSorted={[{
          id: 'price',
          desc: true
        }]}
      />
    </div>
  );
};

Video.propTypes = {
  domTableData: PropTypes.array
};
