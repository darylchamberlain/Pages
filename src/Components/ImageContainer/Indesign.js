import React from 'react';

import './ImageContainer.css';

import cooler from './assets/cooler.jpg';

import socks from './assets/socks.jpg';

import ski from './assets/ski.jpg';

import layout from './assets/layout.jpg';

import hats from './assets/hats.jpg';

import page from './assets/page.jpg';

import vr from './assets/vr.jpg';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'

import 'bootstrap/dist/css/bootstrap.min.css';



class Indesign extends React.Component {
    render() {
        return(
            <Container className="Center" fluid>
                <Row className="Center">
                    <Col xs sm md xl={12} >
                        <ScrollAnimation animateIn="fadeInDown">
                            <h2>Indesign</h2>
                        </ScrollAnimation> 
                    </Col>    
                </Row>
                <Row className="Center">
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInLeft">
                            <img src={cooler} alt="cooler" />
                        </ScrollAnimation> 
                    </Col>  
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInRight">
                            <img src={socks} alt="socks" />
                        </ScrollAnimation> 
                    </Col>  
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInRight">
                            <img src={ski} alt="ski" />
                        </ScrollAnimation> 
                    </Col>  
                </Row> 
                <Row className="Center"> 
                    <Col xs={12} sm={6} md={6} xl={6} > 
                        <ScrollAnimation animateIn="fadeInLeft">
                            <img src={layout} alt="layout" />
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={6} md={6} xl={6} >      
                        <ScrollAnimation animateIn="fadeInLeft">
                            <img src={hats} alt="hats" />
                        </ScrollAnimation> 
                    </Col>  
                </Row> 
                <Row className="Center"> 
                    <Col xs={12} sm={6} md={6} xl={6} > 
                        <ScrollAnimation animateIn="fadeInRight">
                            <img src={page} alt="page" />
                        </ScrollAnimation> 
                    </Col>  
                    <Col xs={12} sm={6} md={6} xl={6} > 
                        <ScrollAnimation animateIn="fadeInUp">
                            <img src={vr} alt="vr" />
                        </ScrollAnimation> 
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default Indesign;