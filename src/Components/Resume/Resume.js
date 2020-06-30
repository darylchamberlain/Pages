import React from 'react';

import './Resume.css';

import Skills from './Skills/Skills';

import Experience from './Experience/Experience';

import Header from '../Body/Header/Header';

import NavBar from '../Body/NavBar/NavBar';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

class Resume extends React.Component {
    render() {
        return (
            <div className="ResumePage"> 
                <NavBar />
                <Header />
                <div className="Resume">

                    <ScrollAnimation animateIn="fadeInLeft">
                        <Skills />
                    </ScrollAnimation>
            
                    <ScrollAnimation animateIn="fadeInRight">
                        <Experience />
                    </ScrollAnimation>
                   
                </div>
             
            </div>
        )
    }
};

export default Resume;