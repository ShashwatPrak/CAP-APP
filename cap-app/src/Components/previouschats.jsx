import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const LeftPane = ({ usernm }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

 let fetchChats = async () => {
    let response = await fetch(
      "http://localhost:8000/api/display/" + `${usernm}/`
    );
    let data = await response.json();
   setChats(data);
 };
    const handleButtonClick = (chat) => {
    // Perform an action with the chat data
    console.log('Button clicked:', chat);
  };
  
  const renderChats = () => {
    const chatButtons = [];
    if (chats === "No chats found")
    {
      return chatButtons;
      }
    for (let i = 0; i < chats.length; i++) {
      const chat = chats[i];
      chatButtons.push(
        <Row key={i} style={{ marginBottom: '10px' }}>
          <Col xs={9} style={{ backgroundColor: '#f8f9fa', width: '100%' }}>
            <a onClick={() => { window.location.href = `/${chat.User}/${chat.chatname}` }}>
            <Button 
              block 
              variant="primary" 
              style={{ width: '100%' }}
              onClick={() => handleButtonClick(chat)}
            >
              {chat.chatname}
              </Button>
              </a>
          </Col>
        </Row>
      );
    }
    return chatButtons;
  };

  return (
    <Container fluid>
      {renderChats()}
    </Container>
  );
};

export default LeftPane;
