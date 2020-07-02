import React from 'react';

import './ImageContainer.css';

import bottle from './assets/bottle.jpg';

import bag from './assets/bag.jpg';

import justice from './assets/justice.jpg';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'

import 'bootstrap/dist/css/bootstrap.min.css';


class Photoshop extends React.Component {
    render() {
        return(
            <Container className="Center" fluid>  
                <Row className="Center">
                    <Col xs sm md xl={12} > 
                        <ScrollAnimation animateIn="flipInX">
                            <h2>Photoshop</h2>
                        </ScrollAnimation>
                    </Col> 
                </Row> 
                <Row className="Center">
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInLeft">
                            <img src={bottle} alt="bottle" />
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInRight">
                            <img src={bag} alt="bag" />
                        </ScrollAnimation> 
                    </Col> 
                    <Col xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation animateIn="fadeInUp">
                            <img src={justice} alt="justice" />
                        </ScrollAnimation> 
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default Photoshop;