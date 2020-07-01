import React from 'react';

import './ImageContainer.css';

import beach from './assets/beach.jpg';

import fan from './assets/fan.png';

import boat from './assets/boat.png';

import gator from './assets/gator.png'

import oldman from './assets/oldman.png';

import flower from './assets/flower.png'

import queen from './assets/queen.png'

import umbrella from './assets/umbrella.png'

import tea from './assets/tea.png'

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";


class Paintings extends React.Component {
    render() {
        return(
            <div>
                <ScrollAnimation animateIn="fadeInRight">
                   <h2> Paintings</h2>
                </ScrollAnimation>
            
                <div className="Center">
                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={gator} alt="gator" />
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={beach} alt="beach" />
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={fan} alt="fan" />
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={boat} alt="boat" />
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={oldman} alt="oldman" />
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInRight">
                        <img src={flower} alt="flower" />
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={queen} alt="queen" />
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInLeft">
                        <img src={umbrella} alt="umbrella" />
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp">
                        <img src={tea} alt="tea" />
                    </ScrollAnimation>

                 </div>
            </div>
        )
    }
}

export default Paintings;