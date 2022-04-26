import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <Container>
            <Row>
                <p className="text-center m-1">Patrik Schöön-Axelsson © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.com">Gatsby</a>. See links above for contact-information.</p>
            </Row>
            <Row>
                <Col className="text-center">
                    <a href="https://www.linkedin.com/in/patrik-sch%C3%B6%C3%B6n-axelsson-169a67198/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <br/>
                    LinkedIn Profile
                </Col>
                <Col className="text-center">
                    <a href="mailto:patrik@schoonaxelsson.com"><i class="bi bi-envelope-open"></i></a>
                    <br/>
                    Email Me
                </Col>
                <Col className="text-center">
                    <a href="https://github.com/patrik-schoon-axelsson" target="_blank"><i class="bi bi-github"></i></a>
                    <br />
                    Github Profile
                </Col>
            </Row>
        </Container>
    )
}

export default Footer