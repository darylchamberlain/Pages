import React from 'react';

import {Link } from "react-router-dom";

import './Resume.css';

import Skills from '../Skills/Skills';

import Experience from '../Experience/Experience';

import References from '../References/References';

import NavBar2 from '../NavBar2/NavBar2';

class Resume extends React.Component {
    render() {
        return (
            <div className="Resume">
                <NavBar2 />
                <Link to="/Page1">
                  Home
                </Link>
                <Skills />
                <Experience />
                <References />
            </div>
        )
    }
};

export default Resume;