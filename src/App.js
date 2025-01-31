import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import RecognizePage from './RecognizePage';
import SignupPage from './SignupPage';
import GenerateTokenPage from './GenerateTokenPage';
import GetCSVPage from './GetCSVPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Face Recognition Attendance System</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/recognize" element={<RecognizePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/generate-token" element={<GenerateTokenPage />} />
          <Route path="/attendance/download-csv" element={<GetCSVPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
