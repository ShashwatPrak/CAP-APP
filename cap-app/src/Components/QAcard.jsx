import React,  { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

class QACard extends Component {
    state = {  } 
    render() { 
        return (
            <Card>
      <Card.Body>
        <Container>
          <Row>
            
              <h5>Question:</h5>
              <p>{this.props.question}</p>
            
            
              <h5>Answer:</h5>
              <p>{this.props.answer}</p> \
          </Row>
        </Container>
      </Card.Body>
    </Card>
        );
    }
}
 
export default QACard;