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

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'

import 'bootstrap/dist/css/bootstrap.min.css';


class Paintings extends React.Component {
    render() {
        return(
            <Container className="Center" fluid> 
                <Row>
                    <Col xs sm md xl={12} > 
                        <ScrollAnimation 
                            animateIn="fadeInRight"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <h2> Paintings</h2>
                        </ScrollAnimation>
                        </Col>
                    </Row>
                <Row className="Center">
                    <Col xs={12} sm={6} md={12} xl={3} > 
                        <ScrollAnimation 
                            animateIn="fadeInRight"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={gator} alt="gator" />
                        </ScrollAnimation>
                    </Col>  
                    <Col xs={12} sm={6} md={6} xl={3} >
                        <ScrollAnimation 
                            animateIn="fadeInLeft"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={fan} alt="fan" />
                        </ScrollAnimation>
                    </Col>
                    <Col xs={12} sm={6} md={6} xl={3} >
                        <ScrollAnimation 
                            animateIn="fadeInLeft"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={boat} alt="boat" />
                        </ScrollAnimation>
                    </Col>
                    <Col className="ColMargin" xs={12} sm={6} md={12} xl={3} >
                        <ScrollAnimation 
                                animateIn="fadeInRight"
                                initiallyVisible={true}
                                animateOnce={true}
                            >
                                    <img src={beach} alt="beach" />
                        </ScrollAnimation>
                    </Col>
                </Row>
                <Row className="Center">
                    <Col xs={12} sm={6} md={4} xl={4} >
                        <ScrollAnimation 
                            animateIn="fadeInRight"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={flower} alt="flower" />
                        </ScrollAnimation>
                    </Col>
                    <Col xs={12} sm={6} md={4} xl={4} >
                        <ScrollAnimation 
                            animateIn="fadeInLeft"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={queen} alt="queen" />
                        </ScrollAnimation>
                    </Col>
                    <Col xs={12} sm={6} md={4} xl={4} >
                        <ScrollAnimation 
                            animateIn="fadeInLeft"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={umbrella} alt="umbrella" />
                        </ScrollAnimation>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} xl={6} >
                        <ScrollAnimation 
                            animateIn="fadeInRight"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={oldman} alt="oldman" />
                        </ScrollAnimation>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} >
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={tea} alt="tea" />
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Paintings;