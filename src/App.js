// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { history } from './index';

import { MainPage } from './components/main-page/main-page';
import { AuthPage } from './components/auth-page/auth-page';
import { routes } from './utils/routes';

import './App.scss';
import './media/style.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path={routes.auth} component={AuthPage}/>
        {
          history.location.pathname === routes.root && !isAuthorized()
            ? history.push(routes.auth)
            : null
        }
        <PrivateRoute path={routes.root} component={MainPage}/>
      </div>
    );
  }
}

const isAuthorized = () => {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
};

function PrivateRoute({ component: Component, ...rest }) {
  console.log('this.isAuthorized', isAuthorized());
  return (
    <Route
      {...rest}
      render={props =>
        history.location.pathname !== routes.auth && isAuthorized() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth'
            }}
          />
        )
      }
    />
  );
}

