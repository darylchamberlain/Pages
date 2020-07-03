import React from 'react';

import './NavBar.css';

import ResumeButton from '../NavBar/Buttons/ResumeButton';

import PortfolioButton from '../NavBar/Buttons/PortfolioButton';

import HomeButton from '../NavBar/Buttons/HomeButton'

import ContactButton from '../NavBar/Buttons/ContactButton'

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'

import Col from 'react-bootstrap/Col'



class NavBar extends React.Component{
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col className="NavBar" xs={4} md={6} lg={8} xl={9}> 
                        <HomeButton />
                    </Col>
                    <Col className="NavBar" xs={4} md={3} lg={2} xl={1}>
                        <PortfolioButton />
                    </Col>
                    <Col className="NavBar" xs={4} md={3} lg={2} xl={1}>
                        <ResumeButton /> 
                    </Col>
                    <Col className="NavBar" xs={4} md={3} lg={2} xl={1}>
                        <ContactButton /> 
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NavBar;