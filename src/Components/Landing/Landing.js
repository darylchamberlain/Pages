import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

import './Landing.css';

import NavBar from '../Body/NavBar/NavBar';

import Goo from '../Goo/Goo';


class Landing extends React.Component{
    render(){
        return(
            <div className="Landing ">
                <NavBar />
                <Goo />

                <ScrollAnimation  className="Title" animateIn="fadeInLeft">
                 <h2>PORT</h2>
                    <h2>FOLIO</h2>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Landing;