import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './subnav.css';

class SubNav extends Component {
  render() {
    return (
      <nav className="subnav">
        <NavLink to="/courses">
          <div className="course-menu">
            <div>
              <div className="course-type">
                <span className="menu-text">Active Team</span>
              </div>
              <div className="course-selection">
                <span className="menu-text">Winston ▾</span>
              </div>
            </div>
          </div>
        </NavLink>
        <div className="settings-menu">
          <NavLink to="/settings">
            <i className="far fa-clock" aria-hidden="true" />
            <span className="menu-text">Time Entries</span>
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default SubNav;
