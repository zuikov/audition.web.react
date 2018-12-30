import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { HeaderAuth } from '../header/header-auth';
import { Login } from '../login/login';
import { SignUp } from '../signup/signup';
import { EnterCode } from '../signup/enter-code';
import { VerifyEmail } from '../signup/verify-email';
// import { NotFound } from '../error-page/not-found';
import { PlayList } from '../playlist/playlist';
import { routes } from '../../utils/routes';

export class AuthPage extends Component {
  render() {
    return (
      <div>
        <HeaderAuth/>
        <Switch>
          <Route path={routes.login} component={Login}/>
          <Route path={routes.signup} component={SignUp}/>
          <Route path={routes.code} component={EnterCode}/>
          <Route path={routes.verify} component={VerifyEmail}/>
          <Route component={PlayList}/>
        </Switch>
      </div>
    );
  }
}

