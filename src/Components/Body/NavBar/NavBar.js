import React from 'react';

import './NavBar.css';

import {Link } from "react-router-dom";

import  ResumeButton from '../NavBar/Buttons/ResumeButton';

import PortfolioButton from '../NavBar/Buttons/PortfolioButton';

import HomeButton from '../NavBar/Buttons/HomeButton'


class NavBar extends React.Component{
    render(){
        return (
            <div className="NavBar">

                <div className="Name">
                     <Link to="/">
                     <HomeButton />
                     </Link>
                </div>
                <div className="Links">
                    <Link to="/Portfolio">
                    <PortfolioButton />
                    </Link>

                    <Link to="/Resume">
                    <ResumeButton />
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar;