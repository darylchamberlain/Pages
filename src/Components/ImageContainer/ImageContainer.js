import React from 'react';

import './ImageContainer.css';

import {Link } from "react-router-dom";

import beach from './assets/beach.jpg';

import clean from './assets/clean.png';

import fan from './assets/fan.png';

import flag from './assets/flag.png';


class Paintings extends React.Component {
    render() {
        return(
          <div>
            <img src={beach} alt="beach" />
            <img src={clean} alt="clean" />
            <img src={fan} alt="fan" />
            <img src={flag} alt="flag" />
          </div>
        )
    }
}

export default Paintings;