import React, { Component } from 'react';

import './Message-list.css';

class MessageList extends Component {
  renderConversations() {
    return (
      <ul>
        <li className="conversation active">
          <div className="c-avatar">MD</div>
          <div className="c-meta">
            <div className="c-name">Mike Darche</div>
            <div className="c-status">Active</div>
          </div>
        </li>
        <li className="conversation">
          <div className="c-avatar">TH</div>
          <div className="c-meta">
            <div className="c-name">Tyler Hudson-Crimi</div>
            <div className="c-status">Inactive</div>
          </div>
        </li>
        <li className="conversation">
          <div className="c-avatar">EJ</div>
          <div className="c-meta">
            <div className="c-name">Evan Jones</div>
            <div className="c-status">Inactive</div>
          </div>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div id="message-list">
        <div className="ml-wrapper">
          <h3>Conversations</h3>
          {this.renderConversations()}
        </div>
      </div>
    );
  }
}

export default MessageList;
