import React, { Component } from 'react';
import InputPanel from '../input-panel/InputPanel';
import Message from '../message/Message';
import './chatroom.css';

class Chatroom extends Component {
  render() {
    return (
      <div id="chatroom">
        <div className="chat-header">
          <div className="active-indicator" />Mike Darche
        </div>
        <div className="chat-window">
          <Message />
        </div>
        <InputPanel />
      </div>
    );
  }
}

export default Chatroom;
