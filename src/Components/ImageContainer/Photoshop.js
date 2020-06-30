import React from 'react';

import './ImageContainer.css';

import bottle from './assets/bottle.jpg';

import bag from './assets/bag.jpg';

import justice from './assets/justice.jpg';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";


class Photoshop extends React.Component {
    render() {
        return(
            <div>
                <ScrollAnimation animateIn="flipInX">
                    <h2>Photoshop</h2>
                </ScrollAnimation> 
               
            <div className="Center">

                <ScrollAnimation animateIn="fadeInLeft">
                    <img src={bottle} alt="bottle" />
                </ScrollAnimation> 
               
                <ScrollAnimation animateIn="fadeInRight">
                    <img src={bag} alt="bag" />
                </ScrollAnimation> 

                <ScrollAnimation animateIn="fadeInUp">
                    <img src={justice} alt="justice" />
                </ScrollAnimation> 
                
            </div>
          </div>
        )
    }
}

export default Photoshop;