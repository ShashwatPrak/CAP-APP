import React, { useState, useEffect } from 'react';
import QACard from './QAcard';
import { Container, Row } from 'react-bootstrap';

const Chats = ({usernm,  chatcode }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

 let fetchQuestions = async () => {
    let response = await fetch(`http://localhost:8000/api/displayquestion/${usernm}/${chatcode}/`);
    let data = await response.json();
   setQuestions(data);
 };
    const handleButtonClick = (chat) => {
    // Perform an action with the chat data
    console.log('Button clicked:', chat);
  };

 const renderQuestions = () => {
    const questionset = [];
    if (questions === "No Questions Found")
    {
      return questionset;
      }
    for (let i = 0; i < questions.length; i++) {
      const ques = questions[i];
      questionset.push(
        <Row key={i} style={{ marginBottom: '10px' }}>
          <QACard question={ques.Question} answer={ques.Answer} />
        </Row>
      );
    }
    return questionset;
  };


  return (
    <Container fluid style={{ overflowY: 'auto', height: '100%' }}>
      {renderQuestions()}
    </Container>
  );
};

export default Chats;
