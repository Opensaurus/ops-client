import React, { Component } from 'react';

import './Message.css';

class Message extends Component {
  render() {
    return (
      <div>
        <div className="chat-message m-client">
          <div className="message-wrapper">
            <div className="m-timestamp">06/07/2018 12:36</div>
            <div className="message">Yo what's up dude?</div>
          </div>
        </div>
        <div className="chat-message m-user">
          <div className="message-wrapper">
            <div className="message">Just building some software bro</div>
          </div>
        </div>
        <div className="chat-message m-bot">
          <div className="message-wrapper">
            <div className="message">This is your bot, Ed Chambers.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
