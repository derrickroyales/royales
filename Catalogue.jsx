import React from 'react';
import Carousel from './Carousel';
import './Catalogue.css';

function Catalogue() {
  return (
    <div className="Catalogue">
      <header className="Catalogue-header"> 
        <h3>Welcome</h3>
      </header>
      <div className="Catalogue-body">
        <Carousel />
      </div>
    </div>
  );
}

export default Catalogue;
