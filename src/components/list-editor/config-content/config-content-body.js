import React, { Fragment, Component } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPlayList, updateListItem } from '../../../redux/actions/content-actions';

class _ConfigContentBody extends Component {
  componentDidMount() {
    this.props.fetchPlayList();
  }
  renderEditable = (cellInfo) => {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.props.playList];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.props.playList[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const playList = this.props.playList
      ? this.props.playList.filter(item => !item.canceled)
      : this.props.playList;
    const columns = [{
      Header: '№',
      accessor: 'sectionNumber',
      width: 50,
      Cell: this.renderEditable
    }, {
      Header: 'Name of section',
      accessor: 'sectionName',
      Cell: this.renderEditable
    }, {
      Header: 'Title',
      accessor: 'title',
      Cell: this.renderEditable
    }, {
      expander: true,
      Header: () => <strong>More</strong>,
      width: 65,
      Expander: ({ isExpanded, ...rest }) =>
        <div>
          {isExpanded
            ? <span>&#x2299;</span>
            : <span>&#x2295;</span>}
        </div>,
      style: {
        cursor: 'pointer',
        fontSize: 25,
        padding: '4.5px 0 0 0',
        textAlign: 'center',
        userSelect: 'none'
      }
    }, {
      Header: '',
      width: 80,
      Cell: row => (
        <input type="button" onClick={() => this.props.updateListItem(playList[row.index])} value="Save" className="save-btn"/>
      )
    }];
    return (
      <Fragment>
        <div className="table-box__body">
          <ReactTable
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  console.log('A Td Element was clicked!');
                  console.log('it produced this event:', e);
                  console.log('It was in this column:', column);
                  console.log('It was in this row:', rowInfo);
                  console.log('It was in this table instance:', instance);

                  // IMPORTANT! React-Table uses onClick internally to trigger
                  // events like expanding SubComponents and pivots.
                  // By default a custom 'onClick' handler will override this functionality.
                  // If you want to fire the original onClick handler, call the
                  // 'handleOriginal' function.
                  if (handleOriginal) {
                    handleOriginal();
                  }
                }
              };
            }}
            // className="table history-table table_hovered"
            data={playList}
            columns={columns}
            pageSize={playList.length}
            // showPagination={false}
            // loading={false}
            // filterable
            // loadingText=""
            // SubComponent={() => <div style={{padding: '10px'}}>Hello</div>}
            SubComponent={row => {
              // console.log('row', row);
              // console.log('playList[row.index]', playList[row.index]);
              return (
                <div style={{ padding: '20px' }}>
                  <strong>Description</strong>
                  <br />
                  <br />
                  {playList[row.index].description}
                  <br />
                </div>
              );
            }}
          />
          {
            playList.length === 0
              ? <span>No content found</span>
              : false
          }
        </div>
        {
          Array.isArray(this.props.loadMoreButton)
            ? false
            : <button onClick={this.incrementOffset} className="btn-load-more">Load More</button>
        }
      </Fragment>
    );
  }
}
_ConfigContentBody.propTypes = {
  playlist: PropTypes.array,
  updatedListItem: PropTypes.array
};

const mapStateToProps = state => ({
  playList: state.playList,
  updatedListItem: state.updatedListItem
});

const mapDispatchToProps = dispatch => ({
  fetchPlayList: bindActionCreators(fetchPlayList, dispatch),
  updateListItem: bindActionCreators(updateListItem, dispatch)
});

export const ConfigContentBody = connect(mapStateToProps, mapDispatchToProps)(_ConfigContentBody);
