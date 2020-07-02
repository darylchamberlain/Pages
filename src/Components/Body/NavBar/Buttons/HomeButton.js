import React from 'react';
import './Button.css';
import {Link} from "react-router-dom";

class HomeButton extends React.Component {
  render(){
    return (
      <div className="wrapper Home">
      <Link to="/" className="second after">
        Daryl Chamberlain
      </Link>
      </div>
    );
  }
}

export default HomeButton;