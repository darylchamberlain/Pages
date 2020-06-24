import React from 'react';

import Images from 'react-bootstrap';

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
            <div>
                <h2 className="animate__animated animate__fadeInLeft">Product Design</h2>
                 <div className="Center">
                   <img src={dew} alt="dew" fluid />
                   <img src={golves} alt="golves" fluid />
                   <img src={greenbay} alt="greenbay" fluid />
                   <img src={astro} alt="astro" fluid />
                   <img src={beanie} alt="beanie" fluid />
                   <img src={hat} alt="hat" rounded />
                   <img src={hat2} alt="hat2" rounded />
                   <img src={CodGlasses} alt="CodGlasses" fluid />
                   <img src={apple} alt="apple"fluid  />
                   <img src={beanie2} alt="beanie2" fluid />
                   <img src={bird} alt="bird"fluid  />
                   <img src={usb} alt="usb"fluid  />
                   <img src={plush} alt="plush" fluid />
                   <img src={play} alt="play"fluid  />
                   <img src={rocket} alt="rocket" fluid />
                   <img src={toy} alt="toy"fluid  />
                 </div>
            </div>
        )
    }
}

export default Samples;