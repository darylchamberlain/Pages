import React from 'react';
import './Button.css';
import {Link } from "react-router-dom";

class PortfolioButton extends React.Component {
  render(){
    return (
      <div className="wrapper PortfolioButton">
        <Link to="/Portfolio" className="second after">
          <p className="NavText">Portfolio</p>
        </Link>
      </div>
    );
  }
}

export default PortfolioButton;