import React, { Fragment, Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAccountsHistory } from '../../../redux/actions/accounts-actions';
import moment from 'moment/moment';
import PropTypes from 'prop-types';

class _StatisticsHistory extends Component {
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
      Header: 'Amount',
      accessor: 'income'
    }, {
      Header: 'Date',
      accessor: 'created_time',
      Cell: item => {
        let date = moment(item.original.created_time);
        return date.format('YYYY-MM-DD HH:mm:ss');
      }
    }, {
      Header: 'Status',
      accessor: 'confirmations'
    }];
    return (
      <Fragment>
        <div className="statistic-column">
          <div className="statistic-history">
            <div className="statistic-history__head">
              <div className="statistic-history__title">History</div>
              <a href="#" className="link link_view">View All</a>
            </div>
            <div className="statistic-history__body">
              <ReactTable
                className="table statistic-history__table"
                data={this.props.accountsHistory}
                columns={columns}
                showPagination={false}
                loading={false}
                loadingText=""
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

_StatisticsHistory.propTypes = {
  accountsHistory: PropTypes.array
};

const mapStateToProps = state => ({
  accountsHistory: state.accountstHistory
});

const mapDispatchToProps = dispatch => ({
  fetchAccountsHistory: bindActionCreators(fetchAccountsHistory, dispatch)
});

export const StatisticsHistory = connect(mapStateToProps, mapDispatchToProps)(_StatisticsHistory);
