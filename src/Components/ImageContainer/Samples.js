import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

import golves from './assets/golves.jpg';

import beanie from './assets/beanie.jpg';

import greenbay from './assets/greenbay.png';

import cod from './assets/cod.jpg';

import apple from './assets/apple.jpg';

import beanie2 from './assets/beanie2.png';

import bird from './assets/bird.jpg';

import usb from './assets/usb.png';

import plush from './assets/plush.png';

import play from './assets/play.jpg';

import rocket from './assets/rocket.jpg';

import toy from './assets/toy.jpg';

import hat from './assets/hat.jpg';

import hat2 from './assets/hat2.jpg';

import dew from './assets/dew.png';

import astro from './assets/astro.jpg';


class Samples extends React.Component {
    render() {
        return(
            <div>
                <ScrollAnimation animateIn="fadeInUp">
                   <h2> Product Design</h2>
                </ScrollAnimation>

                 <div className="Center">
                
                 <ScrollAnimation animateIn="fadeInRight">
                        <img src={dew} alt="dew"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={golves} alt="golves"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={greenbay} alt="greenbay"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={astro} alt="astro"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={beanie} alt="beanie"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInRight">                   
                        <img src={hat} alt="hat"/>
                    </ScrollAnimation> 
                  
                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={hat2} alt="hat2"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={cod} alt="CodGlasses"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInRight">         
                        <img src={apple} alt="apple"/>
                    </ScrollAnimation>  

                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={beanie2} alt="beanie2"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={bird} alt="bird"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInRight">                            
                        <img src={usb} alt="usb"/>
                    </ScrollAnimation>  
                   
                    <ScrollAnimation animateIn="fadeInDown">         
                        <img src={toy} alt="toy" />
                    </ScrollAnimation>  

                    <ScrollAnimation animateIn="fadeInDown">
                        <img src={rocket} alt="rocket"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInUp">                 
                        <img src={play} alt="play"/>
                    </ScrollAnimation> 

                    <ScrollAnimation animateIn="fadeInUp">                    
                        <img src={plush} alt="plush"/>
                    </ScrollAnimation>  
                 </div>
            </div>
        )
    }
}

export default Samples;