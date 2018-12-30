import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './App';
import { store, persistor } from './redux/store';

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router history={history}>
        <App/>
      </Router>
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
