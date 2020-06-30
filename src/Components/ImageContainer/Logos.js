import React from 'react';

import './ImageContainer.css';

import team from './assets/team.jpg';

import team2 from './assets/team2.jpg';

import subway from './assets/subway.jpg';

import city from './assets/city.jpg';

import doug from './assets/doug.jpg';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";


class Logos extends React.Component {
    render() {
        return(
            <div>
                <ScrollAnimation animateIn="fadeInDown">
                    <h2>Logos</h2>
                </ScrollAnimation> 
                
            <div className="Center">

            <ScrollAnimation animateIn="fadeInLeft">
                <img src={doug} alt="doug" />
            </ScrollAnimation> 

            <ScrollAnimation animateIn="fadeInLeft">            
                <img src={team} alt="team" />
            </ScrollAnimation> 

            <ScrollAnimation animateIn="fadeInRight">
                <img src={team2} alt="team2" />
            </ScrollAnimation> 

            <ScrollAnimation animateIn="fadeInRight">
                <img src={subway} alt="subway" />
            </ScrollAnimation> 

            <ScrollAnimation animateIn="fadeInUp">
                <img src={city} alt="city" />
            </ScrollAnimation> 

            </div>
          </div>
        )
    }
}

export default Logos;