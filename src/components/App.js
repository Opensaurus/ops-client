import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';
import 'normalize.css';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import Chat from './chat/Chat';
import Register from './register/Register';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    // const { auth } = this.props;

    // Authenticated Routes
    return (
      <Router>
        <div className="react-container">
          <Header />
          <div id="content-wrapper">
            <Sidebar />
            <div className="main-content">
              <Route exact path="/" component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/active-tasks" component={Dashboard} />
              <Route path="/chat" component={Chat} />
              <Route path="/completed-tasks" component={Dashboard} />
              <Route path="/payments" component={Dashboard} />
              <Route path="/my-account" component={Dashboard} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }
//
// export default connect(mapStateToProps, actions)(App);

export default App;
