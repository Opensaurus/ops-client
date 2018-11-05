import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubNav from './SubNav';
import logo from '../../assets/gep-logo.svg';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="geppetto-logo" />
            </div>
          </Link>

          <ul className="menu-right">
            <li className="current-user">
              <Link to="/my-account">
                <div>
                  <div className="user-name">
                    <i className="fa fa-user-circle" aria-hidden="true" />
                    {this.props.auth.name.first} {this.props.auth.name.last}
                  </div>
                  <div className="user-school">{this.props.auth.role}</div>
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
