import React from 'react';

import './ImageContainer.css';

import {Link } from "react-router-dom";

import cooler from './assets/cooler.jpg';

import socks from './assets/socks.jpg';

import ski from './assets/ski.jpg';

import layout from './assets/layout.jpg';

import hats from './assets/hats.jpg';

import page from './assets/page.jpg';

import vr from './assets/vr.jpg';

class Indesign extends React.Component {
    render() {
        return(
            <div className="Center">
            <img src={cooler} alt="cooler" />
            <img src={socks} alt="socks" />
            <img src={ski} alt="ski" />
            <img src={layout} alt="layout" />
            <img src={hats} alt="hats" />
            <img src={page} alt="page" />
            <img src={vr} alt="vr" />
          </div>
        )
    }
}

export default Indesign;