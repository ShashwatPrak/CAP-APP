import React, {Component} from 'react';

class TextBox extends React.Component {
  
  render() {
    return (
      <div style={{marginTop:'2vh'}}>
        {/* Text input field */}
        <input
          type="text"
          placeholder="Type something..."
          style={{ width:'92%' , float:'left' }} // Add some space between input and button
        />
        {/* Send button */}
        <button style = {{width:'6%' , float:'right'}}>↑</button>
      </div>
    );
  }
}

export default TextBox;
