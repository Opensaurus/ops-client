import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubNav from './subnav/SubNav';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <Link to="/">
            <div className="logo">OpenSaurus</div>
          </Link>

          <ul className="menu-right">
            <li className="current-user">
              <Link to="/my-account">
                <div>
                  <div className="user-name">
                    <i className="fa fa-user-circle" aria-hidden="true" />
                    First Last
                  </div>
                  <div className="user-school">Admin</div>
                </div>
              </Link>
            </li>

            <li>
              <a className="login-btn" href="/api/logout">
                Logout
              </a>
            </li>
          </ul>
        </nav>
        <SubNav />
      </header>
    );
  }
}

export default Header;
