import React from 'react';

import './ImageContainer.css';

import team from './assets/team.jpg';

import team2 from './assets/team2.jpg';

import subway from './assets/subway.jpg';

import city from './assets/city.jpg';

import doug from './assets/doug.jpg';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'

import 'bootstrap/dist/css/bootstrap.min.css';


class Logos extends React.Component {
    render() {
        return(
            <Container className="Center" fluid>
                <Row className="Center">
                    <Col className="ColMargin" xs={12} sm={6} md={12} xl={4} > 
                        <ScrollAnimation 
                            animateIn="fadeInLeft"
                            initiallyVisible={true}
                            animateOnce={true}
                        >     
                                <img src={team2} alt="team2" />
                        </ScrollAnimation> 
                    </Col>
                    <Col className="ColMargin" xs={12} sm={6} md={6} xl={4} > 
                        <ScrollAnimation 
                            animateIn="fadeInLeft"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={doug} alt="doug" />
                        </ScrollAnimation> 
                    </Col>       
                    <Col className="ColMargin" xs={12} sm={12} md={6} xl={4} > 
                        <ScrollAnimation 
                            animateIn="fadeInRight"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={team} alt="team" />
                        </ScrollAnimation> 
                    </Col>
                </Row> 
                <Row className="Center">
                    <Col xs={12} sm={6} md={6} xl={6} > 
                        <ScrollAnimation 
                            animateIn="fadeInRight"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={subway} alt="subway" />
                        </ScrollAnimation> 
                    </Col>
                    <Col xs={12} sm={6} md={6} xl={6} > 
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                                <img src={city} alt="city" />
                        </ScrollAnimation> 
                    </Col>
                </Row>    
           </Container>
        )
    }
}

export default Logos;