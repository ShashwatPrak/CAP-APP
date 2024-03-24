import React from 'react';
import TextBox from './TextArea'; // Import the TextBox component

const WelcomePage = ({ usernm, chatname }) => {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '10px', // Reduced padding
      backgroundColor: '#f0f0f0',
      minHeight: '75vh', // Set minimum height to cover most of the viewport
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    heading: {
      fontSize: '48px',
      color: '#333',
      marginBottom: '40px' // Add margin at the bottom of the heading
    },
    description: {
      fontSize: '24px',
      color: '#666',
      marginBottom: '40px' // Add margin at the bottom of the description
    },
    note: {
      fontSize: '14px',
      color: '#999',
      fontStyle: 'italic',
      marginTop: '20px' // Add margin at the top of the note
    },
    textBox: {
      marginTop: '100px' // Adjust the top margin to move TextBox lower on the screen
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Chatbot!</h1>
      <p style={styles.description}>
        Our chatbot is here to assist you with any questions or concerns you may have. Simply type your message in the chat box and press the send button to get started.
      </p>
      {/* Render the TextBox component */}
          <TextBox usernm={usernm} chatname={chatname } style={styles.textBox} />
      <p style={styles.note}>
        Note: This is a demo version of our chatbot. Some features may be limited.
      </p>
    </div>
  );
};

export default WelcomePage;
