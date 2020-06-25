import React from 'react';

import './Landing.css';

import NavBar from '../Body/NavBar/NavBar';

import Goo from './Goo';


class Landing extends React.Component{
    render(){
        return(
            <div className="Landing ">
                <NavBar />
                <Goo />
                <div className="Title animate__animated animate__fadeInLeft ">
                    <h2>PORT</h2>
                    <h2>FOLIO</h2>
                </div>
               
            </div>
        )
    }
}

export default Landing;