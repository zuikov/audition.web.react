import { combineReducers } from 'redux';
import { searchBlock, searchBlockNotification, searchSide } from './reducers/search-reducer';
import { tokenBalance, accountsHistory } from './reducers/accounts-reducers';
import { domTableData } from './reducers/statistics-reducers';
import { loginHistory } from './reducers/account-reducers';
import { login, verifyAdminReducer } from './reducers/auth-reducer';
import {
  playList,
  listItem,
  actionHistory,
  offsetNumber,
  loadMoreButton,
  pairFilter,
  sideFilter,
  dateFilter,
  defaultPairFilter, hideCanceledCheckboxEnabled
} from './reducers/content-reducers';
import { candlestickData, getChartInterval, getMiniChartData } from './reducers/charts-reducers';
import { complexity, todayStatus } from './reducers/info-reducers';

export const rootReducer = combineReducers({
  login,
  listItem,
  playList,
  verifyAdminReducer,
  loginHistory,
  searchSide,
  tokenBalance,
  domTableData,
  candlestickData,
  complexity,
  todayStatus,
  searchBlock,
  actionHistory,
  offsetNumber,
  loadMoreButton,
  accountsHistory,
  searchBlockNotification,
  getChartInterval,
  getMiniChartData,
  pairFilter,
  sideFilter,
  dateFilter,
  defaultPairFilter,
  hideCanceledCheckboxEnabled
});
