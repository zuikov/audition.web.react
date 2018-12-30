import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActiveCheck, ActiveWatch, ActiveRegister, IconAccount, IconMenu } from '../../media/icons';
import { HeaderDescription } from './header-description';
import { routes } from '../../utils/routes';
import { history } from '../../index';

import './header.scss';

class _HeaderMain extends Component {
  state = { logoutState: false };

  handleDropdownLogout = () => {
    if (this.state.logoutState === false) {
      this.setState({ logoutState: true });
    } else {
      this.setState({ logoutState: false });
    }
  };

  collapse = () => {
    this.setState({ logoutState: false });
  };

  handleLogout = () => {
    localStorage.clear();
    history.push(routes.root);
  };

  render() {
    let exchangeLocation = routes.landing.substring(0, routes.landing.lastIndexOf('/') + 1);
    let currentLocation = this.props.location.substring(0, this.props.location.lastIndexOf('/') + 1);
    return (
      <header className="header header_full">
        <div className="header-logo">
          <Link to={routes.account} className="header-logo__link">
            {/* <IconLogo/> */}
            <img src={require('../../media/img/logo-banners.png')} alt="logo"/>
          </Link>
        </div>
        {
          currentLocation === exchangeLocation ? <HeaderDescription/> : false
        }
        <div className="header-menu">
          <NavLink to={`/landing/${this.props.complexity}`} title="Audition" className="header-menu__item" activeClassName='header-menu__item_active'>
            <ActiveCheck/>
          </NavLink>
          <NavLink to={routes.listEditor} title="Set video" className="header-menu__item" activeClassName='header-menu__item_active'>
            <ActiveWatch/>
          </NavLink>
          <NavLink to={routes.accounts} title="Manage accounts" className="header-menu__item" activeClassName='header-menu__item_active'>
            <ActiveRegister/>
          </NavLink>
          <NavLink to={routes.account} title="Account" className="header-menu__item" activeClassName='header-menu__item_active'>
            <IconAccount/>
          </NavLink>
          <div className="header-menu__item" onClick={this.handleDropdownLogout} tabIndex="0" onBlur={this.collapse}>
            <IconMenu/>
            <span
              className={`dropdown-logout ${this.state.logoutState ? 'logout-show' : 'logout-hide'}`}
              onClick={this.handleLogout}
            >Log out</span>
          </div>
        </div>
      </header>
    );
  }
}

_HeaderMain.propTypes = {
  location: PropTypes.string
};

const mapStateToProps = state => ({
  complexity: state.complexity
});

export const HeaderMain = connect(mapStateToProps)(_HeaderMain);
