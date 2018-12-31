// const baseURL = '';
const testURL = 'http://localhost:7066/api';
// const testURL = 'https://audition-api.herokuapp.com/api';

export const apiEndpoints = {
  login: `${testURL}/user/login`,
  signUp: `${testURL}/user/signup`,
  updateToken: `${testURL}/refreshToken`,
  verifyAdmin: `${testURL}/admin/auth`,
  playlist: `${testURL}/playlist`,
  content: `${testURL}/playlist/`,

  miniChart: `${testURL}/playlist`,
  channel: `${testURL}/playlist`,

  accountsHistory: `${testURL}/exchange/accounts`,
  loginHistory: `${testURL}/user/logins`,
  tokenBalance: `${testURL}/exchange/balance?market=`,
  domData: `${testURL}/exchange/order-depth?market=$marketPair&limit=10&interval=0.000000001`,
  todayStatus: `${testURL}/exchange/status-today?market=$marketPair`,
  googleLogin: `${testURL}/auth/login`
};
