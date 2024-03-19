import React, { Component } from 'react';
import LeftPane from '../Components/previouschats.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Chats from '../Components/currentchat.jsx';
import TextBox from '../Components/TextArea.jsx';
import OffCanvasComponent from '../Components/Offcanvas.jsx';

class MobileView extends Component {
    state = {  } 
    render() { 
        return (
            
            <div style = {{marginTop: '3vh',fontFamily: 'Arial, sans-serif'}}>
          <Container fluid>
            <Row>
    
                        <Col>
                            <Row>
                    <Col xs={1} style={{ paddingTop: '2vh' }}><OffCanvasComponent usernm={this.props.usernm } /></Col>
                                <Col style = {{textAlign: 'left' , paddingLeft:'3vh'}}>
 <h1>Chatbot</h1>
        <p>This is a basic template for the Chatbot</p></Col>
                            </Row>
       
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
 
export default MobileView;