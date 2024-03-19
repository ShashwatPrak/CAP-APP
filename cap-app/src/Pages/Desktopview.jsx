import React, { Component } from 'react';
import LeftPane from '../Components/previouschats.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Chats from '../Components/currentchat.jsx';
import TextBox from '../Components/TextArea.jsx';

class DesktopView extends Component {
    state = {  } 
    render() { 
        return (
            <div style = {{marginTop: '7vh',fontFamily: 'Arial, sans-serif'}}>
          <Container fluid>
            <Row>
              <Col xs={2} style={{ backgroundColor: '#f8f9fa' }}>
                <LeftPane usernm={ this.props.usernm}/>
              </Col>
              <Col>
        <h1>Chatbot</h1>
        <p>This is a basic template for the chatbot</p>
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', height: '65vh'}}>
          <Chats />
                </div>
                <div>
                  <TextBox />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}
 
export default DesktopView;