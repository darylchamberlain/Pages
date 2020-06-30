import React from 'react';

import './App.css';

import Landing from '../Landing/Landing';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <ScrollAnimation animateIn="fadeInLeft">
        <Landing />
        </ScrollAnimation>
        
      </header>
      </div>
  );
}
                            
export default App;
