import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupTerms from './pages/SignupTerms';
import SignupId from './pages/SignupId';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup/terms" element={<SignupTerms />} />
        <Route path="/signup/id" element={<SignupId />} />
      </Routes>
    </Router>
  );
}

export default App;