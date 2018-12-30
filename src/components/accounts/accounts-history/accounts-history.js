import React, { Fragment, Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import './accounts-history.scss';
import { fetchAccountsHistory } from '../../../redux/actions/accounts-actions';

class _AccountsHistory extends Component {
  componentDidMount() {
  }

  render() {
    const columns = [{
      Header: 'Token',
      accessor: 'currency_code',
      Cell: item => {
        return item.original.currency_code.split('_')[0];
      }
    }, {
      Header: 'Date',
      accessor: 'created_time',
      Cell: item => {
        let date = moment(item.original.created_time);
        return date.format('YYYY-MM-DD HH:mm:ss');
      }
    }, {
      Header: 'Amount',
      accessor: 'income'
    }, {
      Header: 'Status',
      accessor: 'confirmations'
    }];
    return (
      <Fragment>
        <div className="transaction-history">
          <div className="main-tabs__head">
            <div className="main-tabs__title statistic-title">Accounts History</div>
          </div>
          <div className="main-tabs__body">
            <div className="main-tabs__column">
              <div className="transaction-history__table">
                <ReactTable
                  className="table statistic-history__table"
                  data={this.props.accountsHistory}
                  columns={columns}
                  showPagination={false}
                  defaultPageSize={this.props.accountsHistory.length}
                  loading={false}
                  loadingText=""
                />
                {
                  this.props.accountsHistory.length === 0
                    ? <span>No history</span>
                    : false
                }
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  accountsHistory: state.accountsHistory
});

const mapDispatchToProps = dispatch => ({
  fetchAccountsHistory: bindActionCreators(fetchAccountsHistory, dispatch)
});

export const AccountsHistory = connect(mapStateToProps, mapDispatchToProps)(_AccountsHistory);
