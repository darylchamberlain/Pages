import React from 'react';
import './Button.css';
import {Link } from "react-router-dom";

class ResumeButton extends React.Component {
  render(){
    return (
      <div className="wrapper">
      <Link to="/Resume" className="second after">
        <p className="NavText">Resume</p>
      </Link>
      </div>
    );
  }
}

export default ResumeButton;