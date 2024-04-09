import React from 'react';
import './App.css';
import menuIcon from './images/menuIcon.svg';

function App() {
  return (
    <div className="app-container">
      <div className="options">
        <div className="letter-options">
          <h1 className="a">A</h1>
          <h1 className="b">B</h1>
          <h1 className="c">C</h1>
        </div>
        <div className="number-options-wheel">
          <h1 className="one">1</h1>
          <h1 className="two">2</h1>
          <h1 className="three">3</h1>
          <h1 className="four">4</h1>
          <h1 className="five">5</h1>
        </div>
      </div>

      <div className="spin">
        <h1 className="spin-text">SPIN</h1>
      </div>

      <div className="foot">
        <h1 className="money">$ 234623</h1>
        <div className="img-circle">
          <img className="img-style" src={menuIcon} alt="menu icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
