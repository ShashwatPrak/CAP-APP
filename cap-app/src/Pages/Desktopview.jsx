import React, { Component } from 'react';
import LeftPane from '../Components/previouschats.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Chats from '../Components/currentchat.jsx';
import TextBox from '../Components/TextArea.jsx';
import WelcomePage from '../Components/WelcomePage.jsx';

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
                  {this.props.chatcode === '' ? <WelcomePage usernm={ this.props.usernm} chatname = {this.props.chatcode} /> : (
                  <>
                      <h1>Chatbot </h1>
      <p>This is a basic template for the chatbot</p>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', height: '65vh'}}>
        <Chats usernm = {this.props.usernm} chatcode = {this.props.chatcode} />
      </div>
      <div>
        <TextBox usernm = {this.props.usernm} chatname = {this.props.chatcode} />
        
      </div>
    </>
  )}
</Col>

              
              </Row>
            </Container>
          </div>
        );
    }
}
 
export default DesktopView;