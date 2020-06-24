import React from 'react';

import './Portfolio.css';

import NavBar from '../Body/NavBar/NavBar';

import Paintings from '../ImageContainer/Paintings';

import Samples from '../ImageContainer/Samples'

import Indesign from '../ImageContainer/Indesign';

import Logos from '../ImageContainer/Logos';

import Photoshop from '../ImageContainer/Photoshop';

import Footer from '../Body/Footer/Footer';

import Carousel from 'react-bootstrap/Carousel'

class Portfolio extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <Carousel />
                <div className="Container">
                    <Samples />
                    <Photoshop />
                    <Indesign />
                    <Logos />
                    <Paintings />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Portfolio;