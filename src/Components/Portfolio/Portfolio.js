import React from 'react';

import './Portfolio.css';

import NavBar from '../Body/NavBar/NavBar';

import Paintings from '../ImageContainer/Paintings';

import Samples from '../ImageContainer/Samples'

import Indesign from '../ImageContainer/Indesign';

import Logos from '../ImageContainer/Logos';

import Photoshop from '../ImageContainer/Photoshop';

import CarouselProvider from '../Carousel/CarouselProvider'

import '../Carousel/Carousel.css'

import "animate.css/animate.min.css";


class Portfolio extends React.Component {
    render(){
        return( 
            <div>
                <NavBar />
                <div>
                <CarouselProvider />
                </div>
                <div className="Container">
                    <Samples />
                    <Photoshop />
                    <Indesign />
                    <Logos />
                    <Paintings />
                </div>
            </div>
        )
    }
}

export default Portfolio;