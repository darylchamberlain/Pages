import React from 'react';

import {Link } from "react-router-dom";

import './Portfolio.css';

import NavBar from '../Body/NavBar/NavBar';

import ImageContainer from '../ImageContainer/ImageContainer';

import Footer from '../Body/Footer/Footer';

import Paintings from '../ImageContainer/Paintings';

import Samples from '../ImageContainer/Samples'

import Indesign from '../ImageContainer/Indesign';

import Logos from '../ImageContainer/Logos';

import Photoshop from '../ImageContainer/Photoshop';

class Portfolio extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <div className="Container">
                    <Photoshop />
                    <Logos />
                    <Paintings />
                    <Samples />
                    <Indesign />
                </div>
            </div>
        )
    }
}

export default Portfolio;