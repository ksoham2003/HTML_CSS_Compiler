// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Simulation from './Simulation';
import Procedure from './Procedure';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Code Simulation App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/procedure">How to Use</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Simulation />} />
            <Route path="/procedure" element={<Procedure />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
