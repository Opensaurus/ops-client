import React, { Component } from 'react';
import MessageList from './message-list/MessageList';
import Chatroom from './chatroom/Chatroom';
import './Chat.css';

class Chat extends Component {
  render() {
    return (
      <div id="chat">
        <MessageList />
        <Chatroom />
      </div>
    );
  }
}

export default Chat;
