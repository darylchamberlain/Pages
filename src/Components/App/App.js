import React from 'react';

import './App.css';

import NavBar from '../Body/NavBar/NavBar';

import Header from '../Body/Header/Header';

function App() {
  return (
    <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
          <NavBar />
          <Header />
      </div>
  );
}
                            
export default App;
