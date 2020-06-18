import React from 'react';
import './NavBar.css';
import {Link } from "react-router-dom";

class NavBar extends React.Component{
    render(){
        return (
            <div className="NavBar">
                 <Link to="/Resume">
                  Resume 
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

export default NavBar;