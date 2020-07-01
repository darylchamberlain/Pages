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
                <Row className="NavBar">
                    <Col xs md xl={10}> 
                        <HomeButton />
                    </Col>
                    <Col xs md xl={1}>
                        <PortfolioButton />
                    </Col>
                    <Col xs md xl={1}>
                        <ResumeButton /> 
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NavBar;