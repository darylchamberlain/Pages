import React from 'react';

import './Resume.css';

import Skills from './Skills/Skills';

import Experience from './Experience/Experience';

import Header from '../Body/Header/Header';

import NavBar from '../Body/NavBar/NavBar';

import Footer from '../Body/Footer/Footer'

class Resume extends React.Component {
    render() {
        return (
            <div className="ResumePage"> 
                <NavBar />
                <Header />
                <div className="Resume">
                    <Skills />
                    <Experience />
                </div>
                <Footer />
            </div>
        )
    }
};

export default Resume;