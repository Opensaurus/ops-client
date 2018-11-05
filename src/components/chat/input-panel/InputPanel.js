import React, { Component } from 'react';
import './input-panel.css';

class InputPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Message submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div id="input-panel">
        <form onSubmit={this.handleSubmit}>
          <input
            className="message-input"
            type="text"
            placeholder="Enter a message..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button className="send-button" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default InputPanel;
