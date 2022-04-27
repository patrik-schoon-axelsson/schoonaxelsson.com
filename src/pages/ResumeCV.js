import React from 'react';
import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap';

const ResumeCV = ({ data }) => {
    
    return <Layout>
            <Container>
                <Row>
                    <Col sm={2} md={3} className="d-xs-none d-sm-block">
                        Summary
                        <br/>
                        Download CV Link
                    </Col>
                    <Col sm={10} md={9}>
                        <Row>
                            <h2 className="text-center">Patrik Schöön-Axelsson</h2>
                            <br/>
                            <p>
                                Combining a love of web-development with sound, troubleshooting experience of http-servers, DNS, Linux server-environments (Debian/CentOS), a sound knowledge of Python for backend services and automation 
                                with a constant desire to learn more and find the best possible solution to technical issues.

                             </p>
                        </Row>
                        <hr/>
                        <Row>
                            <table className="table">
                                <thead>
                                    <th scope="col">Programming languages</th>
                                    <th scope="col">(Frameworks)</th>
                                    <th scope="col">Operating Systems</th>
                                    <th scope="col">Troubleshooting Experience</th>
                                    <th scope="col">Miscellaneous Experience</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>JavaScript (Frontend/Client)</td>
                                        <td>React, Vue, jQuery, Gatsby, Next.JS</td>
                                        <td>Windows (7, 10, 11, Server 2019)</td>
                                        <td>DHCP, Switch / Router configuration</td>
                                        <td>Copywriting</td>
                                    </tr>
                                    <tr>
                                        <td>Node.JS</td>
                                        <td>Express.JS, Mongoose, Sequelize</td>
                                        <td>Linux (Debian APT-based distros and CentOS YUM-distros)</td>
                                        <td>Http Server configuration (Apache/Nginx)</td>
                                        <td>Customer Service / Technical Support</td>
                                    </tr>
                                    <tr>
                                        <td>Python</td>
                                        <td>Django, Flask, BeautifulSoup, Tkinter</td>
                                        <td>Linux (Debian APT-based distros and CentOS YUM-distros)</td>
                                        <td>DNS troubleshooting, Bind configuration</td>
                                        <td>Volunteering, SFI-school</td>   
                                    </tr>
                                    <tr>
                                        <td>Bash</td>
                                        <td></td>
                                        <td>Database Administration (MySQL, MongoDB)</td>
                                        <td>Docker, Docker Compose</td>
                                        <td>Customer Satisfaction</td>   
                                    </tr>
                                </tbody>
                            </table>
                        </Row>
                        <hr/>
                        <Row>
                            Prior Employment Experience
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    
};

export default ResumeCV