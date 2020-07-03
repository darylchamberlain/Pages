import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

import './Landing.css';

import NavBar from '../Body/NavBar/NavBar';

import Goo from '../Goo/Goo';

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'



class Landing extends React.Component{
    render(){
        return(
            <Container fluid>
                <NavBar />
                <div><Goo /> 
                    <Col xs sm md xl={6} > 
                        <ScrollAnimation  
                            className="Title" 
                            animateIn="fadeInLeft"
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                            <h2>PORT</h2>
                            <h2>FOLIO</h2>
                        </ScrollAnimation>
                    </Col>
                </div>
            </Container>
        )
    }
}

export default Landing;