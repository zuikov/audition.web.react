import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';

import './header.scss';

export class HeaderAuth extends Component {
  render() {
    return (
      <header className="header header_auth">
        <div className="header-logo">
          <Link to={routes.account} className="header-logo__link">
            <img src={require('../../media/img/logo-banners.png')} alt="logo"/>
          </Link>
        </div>
        <div className="header-menu__auth">
          <div className="header-menu__auth-item">
            <Link to={routes.login} className="header-menu__auth-link">Login</Link>
          </div>
          <div className="header-menu__auth-item">
            <Link to={routes.signup} className="header-menu__auth-link">Sign up</Link>
          </div>
        </div>
      </header>
    );
  }
}
