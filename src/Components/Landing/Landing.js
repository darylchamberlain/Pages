import React from 'react';

import './Landing.css';

import {Link } from "react-router-dom";

import NavBar from '../Body/NavBar/NavBar';

import ViewButton from '../Body/NavBar/Buttons/ViewButton';


class Landing extends React.Component{
    render(){
        return(
            <div className="Landing">
                <NavBar />
                <div className="Title">
                <h2>port</h2>
                <h2>folio</h2>
                
                </div>
                <div className="View">
                    <Link to="/Home">
                        <ViewButton />
                    </Link>   
                </div>
            </div>
        )
    }
}

export default Landing;