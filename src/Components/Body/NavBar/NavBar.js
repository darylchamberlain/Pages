import React from 'react';
import './NavBar.css';
import {Link } from "react-router-dom";
import  ResumeButton from '../NavBar/Buttons/ResumeButton';
import PortfolioButton from '../NavBar/Buttons/PortfolioButton';

class NavBar extends React.Component{
    render(){
        return (
            <div className="NavBar">
                 <p>Daryl Chamberlain</p>
                 <Link to="/Portfolio">
                 <PortfolioButton />
                </Link>
                <Link to="/Resume">
                <ResumeButton />
                 </Link>
            </div>
        )
    }
}

export default NavBar;