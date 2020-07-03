import React from 'react';

import './Portfolio.css';

import NavBar from '../Body/NavBar/NavBar';

import Paintings from '../ImageContainer/Paintings';

import Samples from '../ImageContainer/Samples'

import Indesign from '../ImageContainer/Indesign';

import Logos from '../ImageContainer/Logos';

import Photoshop from '../ImageContainer/Photoshop';

import CarouselProvider from '../CarouselProvider'

import "animate.css/animate.min.css";

import ScrollToTop from '../ScrollToTop/ScrollToTop'

import ScrollAnimation from 'react-animate-on-scroll';



class Portfolio extends React.Component {
    render(){
        return( 
            <div>
                <NavBar />
                <div className="CarouselWrapper">
                <CarouselProvider />
                </div>
                <div className="Container">
                    <Samples />
                    <Photoshop />
                    <Indesign />
                    <Logos />
                    <Paintings />
                  
                </div>
                    <ScrollAnimation   animateIn="bounce">
                        <ScrollToTop />
                  </ScrollAnimation >
            </div>
        )
    }
}

export default Portfolio;