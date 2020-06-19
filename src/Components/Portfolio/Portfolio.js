import React from 'react';

import {Link } from "react-router-dom";

import './Portfolio.css';

import NavBar3 from '../NavBar3/NavBar3';

import ImageContainer from '../ImageContainer/ImageContainer';

import Footer from '../Footer/Footer';

import Paintings from '../ImageContainer/Paintings';

import Samples from '../ImageContainer/Samples'

import Indesign from '../ImageContainer/Indesign';

import Logos from '../ImageContainer/Logos';

import Photoshop from '../ImageContainer/Photoshop';



class Portfolio extends React.Component {
    render(){
        return(
           <div className="Container">
            <NavBar3 />
            <Photoshop />
            <Logos />
            <Paintings />
            <Samples />
            <Indesign />
            <Footer />
            </div>
        )
    }
}

export default Portfolio;