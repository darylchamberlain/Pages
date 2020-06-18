import React from 'react';
import './NavBar3.css';
import {Link } from "react-router-dom";


class NavBar3 extends React.Component{
    render(){
        return (
            <div className="NavBar">
                <Link to="/Page1">
                  Home
                </Link>
                <Link to="/Resume">
                   Resume 
                 </Link>
                <a href="https://www.linkedin.com/in/daryl-chamberlain-574a88122/">Linkedin</a>
                <p>Daryl Chamberlain</p>
            </div>
        )
    }
}

export default NavBar3;