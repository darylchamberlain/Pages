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

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'

import 'bootstrap/dist/css/bootstrap.min.css';


class Samples extends React.Component {
    render() {
        return(
            <Container className="Center" fluid>    
                <Row>
                    <Col xs sm md xl={12} > 
                        <ScrollAnimation animateIn="fadeInUp">
                           <h2> Product Design</h2>
                        </ScrollAnimation>
                    </Col>
                </Row>
                <Row className="Center">
                    <Col xs={12} sm={6} md={6} xl={4} > 
                         <ScrollAnimation animateIn="fadeInRight">
                            <img src={dew} alt="dew"/>
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInRight">
                            <img src={golves} alt="golves"/>
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInLeft">
                            <img src={greenbay} alt="greenbay"/>
                        </ScrollAnimation> 
                    </Col>
                </Row>
                <Row className="Center">
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInLeft">
                            <img src={astro} alt="astro"/>
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInRight">
                            <img src={beanie} alt="beanie"/>
                        </ScrollAnimation>
                    </Col>
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInRight">                   
                            <img src={hat} alt="hat"/>
                        </ScrollAnimation> 
                    </Col>
                </Row>
                <Row className="Center">
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInLeft">
                            <img src={hat2} alt="hat2"/>
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInLeft">
                            <img src={cod} alt="CodGlasses"/>
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInRight">         
                            <img src={apple} alt="apple"/>
                        </ScrollAnimation>  
                    </Col>
                </Row>
                <Row className="Center">
                    <Col xs={12} sm={12} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInRight">
                            <img src={beanie2} alt="beanie2"/>
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInLeft">
                            <img src={bird} alt="bird"/>
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInRight">                            
                            <img src={usb} alt="usb"/>
                        </ScrollAnimation>
                    </Col>  
                </Row>
                <Row className="Center">
                    <Col xs={12} sm={12} md={6} xl={4} >
                        <ScrollAnimation animateIn="fadeInDown">         
                            <img src={toy} alt="toy" />
                        </ScrollAnimation>  
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInDown">
                            <img src={rocket} alt="rocket"/>
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInUp">                 
                            <img src={play} alt="play"/>
                        </ScrollAnimation> 
                    </Col>
                </Row>
                <Row className="Center">
                    <Col xs={12} sm={12} md={3} xl={3}></Col>
                    <Col xs={12} sm={12} md={6} xl={6} > 
                        <ScrollAnimation animateIn="fadeInUp">                    
                            <img src={plush} alt="plush"/>
                        </ScrollAnimation>  
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={3}></Col>
                </Row>
            </Container>
        )
    }
}

export default Samples;