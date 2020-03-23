import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Hello Omnistack Week
        {' '}
        <span
          role="img"
          aria-label="A rocket"
          aria-labelledby="Just a rocket"
        >
          🚀🚀
        </span>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
