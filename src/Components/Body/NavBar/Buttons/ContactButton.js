import React from 'react';
import './Button.css';
import {Link} from "react-router-dom";

class ContactButton extends React.Component {
  render(){
    return (
      <div className="wrapper Contact">
      <Link to="/Contact" className="second after">
        <p className="NavText">Contact</p>
      </Link>
      </div>
    );
  }
}

export default ContactButton;