import React from 'react';
import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap';

const ResumeCV = ({ data }) => {
    
    return <Layout>
            <Container fluid>
                <Row>
                    <Col xs={2} md={4}>
                        Summary
                    </Col>
                    <Col xs={10} md={8}>
                        <Row>
                            Presentation
                        </Row>
                        <hr/>
                        <Row>
                            Skills table
                        </Row>
                        <hr/>
                        <Row>
                            Prior Work Experience
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    
};

export default ResumeCV