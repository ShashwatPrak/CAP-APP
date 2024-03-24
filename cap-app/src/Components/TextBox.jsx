import React, { Component } from 'react';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSendClick = () => {
    // Get the input value from the state
    const inputValue = this.state.inputValue;
    console.log('Sending question:', inputValue); // Log the input value
    
    // Call the onQuestionSubmit function passed from parent component
    this.props.onQuestionSubmit(inputValue);
  }

  render() {
    return (
      <div style={{ marginTop: '2vh' }}>
        {/* Text input field */}
        <input
          type="text"
          placeholder="Type something..."
          style={{ width: '92%', float: 'left' }}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        {/* Send button */}
        <button style={{ width: '6%', float: 'right' }} onClick={this.handleSendClick}>↑</button>
      </div>
    );
  }
}

export default TextBox;
