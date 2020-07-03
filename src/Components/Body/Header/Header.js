import React from 'react';
import './Header.css';

import Row from 'react-bootstrap/Row'

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'

class Header extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="RightColumn" xs={0} sm={0} md={0} lg={0} xl={2}></Col>
                    <Col className="Header" xs={12} sm={12} md={12} lg={12} xl={8}></Col>
                    <Col className="RightColumn" xs={0} sm={0} md={0} lg={0} xl={2}></Col>
                </Row>
            </Container>
        )
    }
}

export default Header;