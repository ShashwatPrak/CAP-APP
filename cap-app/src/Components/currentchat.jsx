import React, { Component } from 'react';
import QACard from './QAcard';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Chats extends Component {
    state = {  } 
    render() {
        return (
        
            <Container fluid style={{ overflowY: 'auto', height: '100%' }} >
            <Row>
                <QACard question= "What is the capital of France?" answer="The capital of France is Paris." />
            </Row>
            <Row>
                <QACard question= "What is the capital of France?" answer="The capital of France is Paris." />
            </Row>
            <Row>
                <QACard question= "What is the capital of France?" answer="The capital of France is Paris." />
                </Row>
                <Row>
                <QACard question= "What is the capital of France?" answer="The capital of France is Paris." />
            </Row>
        </Container>
        );
    }
}
 
export default Chats;
