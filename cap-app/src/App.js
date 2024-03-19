import React from 'react';
import ChatPage from './Pages/ChatPage'; // Assuming App.js is in the same directory as Pages
import { BrowserRouter as Router, Switch,Routes, Route, Link } from "react-router-dom";


function App() {
  return (
      <Routes>
      <Route path="/:usernm" exact element={<ChatPage />} />
      </Routes>
  );
}

export default App;
