import React from 'react';

import './ImageContainer.css';

import {Link } from "react-router-dom";

import beach from './assets/beach.jpg';

import clean from './assets/clean.png';

import fan from './assets/fan.png';

import flag from './assets/flag.png';

import boat from './assets/boat.png';

import gator from './assets/gator.png'

import oldman from './assets/oldman.png';

import flower from './assets/flower.png'

import queen from './assets/queen.png'

import umbrella from './assets/umbrella.png'

import water from './assets/water.png'

import tea from './assets/tea.png'

class Paintings extends React.Component {
    render() {
        return(
        <div className="Center">
            <img src={water} alt="water" />
            <img src={gator} alt="gator" />
            <img src={beach} alt="beach" />
            <img src={clean} alt="clean" />
            <img src={fan} alt="fan" />
            <img src={boat} alt="boat" />
            <img src={oldman} alt="oldman" />
            <img src={flower} alt="flower" />
            <img src={queen} alt="queen" />
            <img src={umbrella} alt="umbrella" />
            <img src={tea} alt="tea" />
            <img src={flag} alt="flag" />
          </div>
        )
    }
}

export default Paintings;