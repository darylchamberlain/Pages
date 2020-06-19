import React from 'react';
import './NavBar2.css';
import {Link } from "react-router-dom";


class NavBar2 extends React.Component{
    render(){
        return (
            <div className="NavBar2">
                <Link to="/Page1">
                  Home
                </Link>
                <Link to="/Portfolio">
                 Portfolio
                </Link>
                <a href="https://www.linkedin.com/in/daryl-chamberlain-574a88122/">Linkedin</a>
                <p>Daryl Chamberlain</p>
            </div>
        )
    }
}

export default NavBar2;