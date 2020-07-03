import React from 'react';

import './Resume.css';

import Skills from './Skills/Skills';

import Experience from './Experience/Experience';

import Header from '../Body/Header/Header';

import NavBar from '../Body/NavBar/NavBar';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'


class Resume extends React.Component {
    render() {
        return (
            <div className="ResumePage"> 
                <NavBar />
                <Header />
                <Container fluid>
                    <Row className="RowBackgroundColor"> 
                    <Col className="RightColumn" xs={0} sm={0} md={0} lg={0} xl={2}></Col>
                    <Col xs={4} sm={3} md={3} lg={4} xl={3}>
                        <ScrollAnimation animateIn="fadeInLeft">
                            <Skills />
                        </ScrollAnimation>
                    </Col>
                    <Col xs={8} sm={9} md={9} lg={7} xl={5}>
                        <ScrollAnimation animateIn="fadeInRight">
                            <Experience />
                        </ScrollAnimation>
                    </Col>
                    <Col className="RightColumn" xs={0} sm={0} md={0} lg={0} xl={2}></Col>
                    </Row>
                </Container>
             
            </div>
        )
    }
};

export default Resume;