import React from 'react';

import './Resume.css';

import Skills from './Skills/Skills';

import Experience from './Experience/Experience';

import Header from '../Body/Header/Header';

import NavBar from '../Body/NavBar/NavBar';

class Resume extends React.Component {
    render() {
        return (
            <div> 
                <NavBar />
                <Header />
                <div className="Resume">
                    <Skills />
                    <Experience />
                </div>
            </div>
        )
    }
};

export default Resume;