import React from 'react';

import {Link } from "react-router-dom";

import './Resume.css';

import Skills from './Skills/Skills';

import Experience from './Experience/Experience';

import References from './References/References';

import NavBar from '../Body/NavBar/NavBar';

import Footer from '../Body/Footer/Footer';

import Header from '../Body/Header/Header';

class Resume extends React.Component {
    render() {
        return (
            <div>
                 <NavBar />
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