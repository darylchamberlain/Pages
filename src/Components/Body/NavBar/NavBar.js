import React from 'react';

import './NavBar.css';

import ResumeButton from '../NavBar/Buttons/ResumeButton';

import PortfolioButton from '../NavBar/Buttons/PortfolioButton';

import HomeButton from '../NavBar/Buttons/HomeButton'

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'

import Col from 'react-bootstrap/Col'



class NavBar extends React.Component{
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col className="RightColumn" xs={0} sm={0} md={0} lg={0} xl={2}></Col>
                            <Col className="NavBar" xs={4} md={8} lg={8} xl={6}> 
                                <HomeButton />
                            </Col>
                            <Col className="NavBar" xs={4} md={2} lg={2} xl={1}>
                                <PortfolioButton />
                            </Col>
                            <Col className="NavBar" xs={4} md={2} lg={2} xl={1}>
                                <ResumeButton /> 
                            </Col>
                     
                    <Col className="RightColumn" xs={0} sm={0} md={0} lg={0} xl={2}></Col>
                </Row>
            </Container>
        )
    }
}

export default NavBar;