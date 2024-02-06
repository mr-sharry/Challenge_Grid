import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ChallengeGrid from './ChallengeGrid';
import QuestionUpload from './QuestionUpload';
import BinaryPractice from './BinaryPractice';
import Help from './Help';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/BinaryPractice" element={<BinaryPractice />} />
      <Route path="/ChallengeGrid" element={<ChallengeGrid />} />
      <Route path="/QuestionUpload" element={<QuestionUpload />} />
      <Route path="/Help" element={<Help />} />
    </Routes>
  </Router>
);