import React from 'react';

import './ImageContainer.css';

import {Link } from "react-router-dom";

import bottle from './assets/bottle.jpg';

import bag from './assets/bag.jpg';

import justice from './assets/justice.jpg';


class Photoshop extends React.Component {
    render() {
        return(
        <div className="Center">
            <img src={bottle} alt="bottle" />
            <img src={bag} alt="bag" />
            <img src={justice} alt="justice" />
          </div>
        )
    }
}

export default Photoshop;