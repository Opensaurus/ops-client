import React, { Component } from 'react';
import ChatInput from '../input/ChatInput';
import Message from '../message/Message';
import './Chatroom.css';

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
        <ChatInput />
      </div>
    );
  }
}

export default Chatroom;
