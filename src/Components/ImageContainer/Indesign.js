import React from 'react';

import './ImageContainer.css';

import cooler from './assets/cooler.jpg';

import socks from './assets/socks.jpg';

import ski from './assets/ski.jpg';

import layout from './assets/layout.jpg';

import hats from './assets/hats.jpg';

import page from './assets/page.jpg';

import vr from './assets/vr.jpg';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";



class Indesign extends React.Component {
    render() {
        return(
            <div>

                <ScrollAnimation animateIn="fadeInDown">
                    <h2>Indesign</h2>
                </ScrollAnimation> 
               
                <div className="Center">

                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={cooler} alt="cooler" />
                    </ScrollAnimation> 
            
                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={socks} alt="socks" />
                    </ScrollAnimation> 
            
                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={ski} alt="ski" />
                    </ScrollAnimation> 
                    
                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={layout} alt="layout" />
                    </ScrollAnimation> 
                      
                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={hats} alt="hats" />
                    </ScrollAnimation> 
            
                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={page} alt="page" />
                    </ScrollAnimation> 
            
                    <ScrollAnimation animateIn="fadeInUp">
                        <img src={vr} alt="vr" />
                    </ScrollAnimation> 
                
                </div>
            </div>
        )
    }
}

export default Indesign;