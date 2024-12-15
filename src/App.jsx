import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navi from './components/Navi';
import Contents from './components/Contents';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navi />
        <main>
          <Routes>
            <Route path="/all" element={<Contents category="all" />} />
            <Route path="/fullstack" element={<Contents category="Full Stack Development" />} />
            <Route path="/datascience" element={<Contents category="Data Science" />} />
            <Route path="/cybersecurity" element={<Contents category="Cyber Security" />} />
            <Route path="/career" element={<Contents category="Career Development" />} />
            <Route path="/" element={<Contents category="all" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
