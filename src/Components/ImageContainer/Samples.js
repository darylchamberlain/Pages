import React from 'react';

import {Link } from "react-router-dom";

import golves from './assets/golves.jpg';

import beanie from './assets/beanie.jpg';

import greenbay from './assets/greenbay.png';

import CodGlasses from './assets/cod glasses.jpg';

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
          <div className="Center">
            <img src={dew} alt="dew" />
            <img src={golves} alt="golves" />
            <img src={greenbay} alt="greenbay" />
            <img src={astro} alt="astro" />
            <img src={beanie} alt="beanie" />
            <img src={hat} alt="hat" />
            <img src={hat2} alt="hat2" />
            <img src={CodGlasses} alt="CodGlasses" />
            <img src={apple} alt="apple" />
            <img src={beanie2} alt="beanie2" />
            <img src={bird} alt="bird" />
            <img src={usb} alt="usb" />
            <img src={plush} alt="plush" />
            <img src={play} alt="play" />
            <img src={usb} alt="usb" />
            <img src={rocket} alt="rocket" />
            <img src={toy} alt="toy" />
          </div>
        )
    }
}

export default Samples;