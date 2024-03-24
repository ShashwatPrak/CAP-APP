import React, { useState } from 'react';

const TextBox = ({ usernm, chatname }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = async () => {
    if (text != '') {
      try {
        const response = await fetch(`http://localhost:8000/api/newquestion/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'message': text, 'chatcode': chatname }),
        });
        if (response.ok) {
          console.log('Message sent successfully!');
          setText('');
          const data = await response.json(); // Parse response as JSON
          if (data === "Question added successfully") {
            window.location.href = `/${usernm}/${chatname}`;
          } else {
            window.location.href = `/${usernm}/` + data;
          }
        } else {
          console.error('Failed to send message:', response.statusText);
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    };
  }

  return (
    <div style={{ marginTop: '2vh' }}>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{ width: '92%', float: 'left' }}
      />
      <button onClick={handleSend} style={{ width: '6%', float: 'right' }}>
        ↑
      </button>
    </div>
  );
};

export default TextBox;
