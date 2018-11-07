import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Contractor, Admin } from './menu/menu-items';

import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { show: this.props.show };
  }

  toggleClass() {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  }

  renderMenu(isAdmin) {
    return (isAdmin ? Admin : Contractor).map(({ label, route, icon }) => {
      return (
        <li key={label}>
          <Link to={route}>
            <i className={icon} />
            <span className="sidebar-item">{label}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={`sidebar-nav ${this.state.show ? 'minimize' : ''}`}>
        <div className="sidebar">
          <ul>{this.renderMenu(false)}</ul>
          <div className="sidebar-control">
            <i
              onClick={this.toggleClass.bind(this)}
              className="fas fa-angle-left"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
