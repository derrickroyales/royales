import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Catalogue from './Catalogue';
import Carousel from './Carousel';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='App-header'>
          <p>Royales</p>
        </div>
        <div className='App-body'>
          <nav>
            <Link to="/catalogue">
              <img src={`${process.env.PUBLIC_URL}/0.jpg`} alt="O" />
            </Link>
          </nav>
          <Routes>
            <Route path="/catalogue" element={<Catalogue />} />
          </Routes>
        </div>
        <div className='App-bottom'>
          <p>Click the logo to continue</p>
        </div>
      </div>
    </Router>
  );
};

export default App;

