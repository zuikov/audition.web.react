import React, { Component, Fragment } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { HeaderMain } from '../header/header-main';
import { Account } from '../../components/account/account';
import { Landing } from '../landing/landing';
import { Accounts } from '../accounts/accounts';
import { ListEditor } from '../list-editor/list-editor';
import { CurrencyLine } from '../level-line/level-line';
import { routes } from '../../utils/routes';
import { NotFound } from '../error-page/not-found';
import { verifyAdminAction } from '../../redux/actions/auth-actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class _MainPage extends Component {
  constructor(props) {
    super(props);
    this.props.verifyAdmin();
  }

  render() {
    return (
      <Fragment>
        <HeaderMain location={this.props.location.pathname}/>
        <CurrencyLine/>
        <Switch>
          <PrivateRoute path={routes.account} component={Account}/>
          <Route path={routes.landing} component={Landing }/>
          <PrivateRoute path={routes.accounts} component={Accounts}/>
          <PrivateRoute path={routes.listEditor} component={ListEditor}/>
          <Route component={NotFound}/>
        </Switch>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover={false}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log('state.verifyAdminReducer', state.verifyAdminReducer);
  isAdmin = state.verifyAdminReducer;
};

const mapDispatchToProps = dispatch => ({
  verifyAdmin: bindActionCreators(verifyAdminAction, dispatch)
});

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(_MainPage);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? (
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

var isAdmin = false;
