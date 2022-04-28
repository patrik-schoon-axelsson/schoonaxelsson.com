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
                            <em>
                                Combining a love of web-development with troubleshooting experience of http-servers, DNS, Linux server-environments (Debian/CentOS), a sound knowledge of Python for backend services and automation 
                                with a constant desire to learn more and find the best possible solution to technical issues. Passionate about providing good technical support and producing quality solutions.
                            </em>
                        </Row>
                        <hr/>
                        <Row>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <th scope="col">Programming languages</th>
                                        <th scope="col">(Frameworks / Tools)</th>
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
                                            <td>Linux (Debian APT-based distros and CentOS YUM-based distros)</td>
                                            <td>Http Server configuration (Apache/Nginx)</td>
                                            <td>Customer Service / Technical Support</td>
                                        </tr>
                                        <tr>
                                            <td>Python</td>
                                            <td>Django, Flask, BeautifulSoup, Tkinter</td>
                                            <td></td>
                                            <td>DNS troubleshooting, Bind configuration</td>
                                            <td>Volunteering, SFI-school</td>   
                                        </tr>
                                        <tr>
                                            <td>Bash</td>
                                            <td>Dig, Arp, SCP, Rsync, SSH</td>
                                            <td>Database Administration (MySQL, MongoDB)</td>
                                            <td>Docker, Docker Compose</td>
                                            <td>Customer Satisfaction oriented</td>   
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Row>
                        <hr/>
                        <Row>
                            <h3 className="text-center">Prior Experience</h3>
                            <br />
                            <blockquote class="blockquote">
                                <p class="mb-0 text-center">Customer-Facing Technical Support, 2018-Present for ISPs and Hosting clients</p>
                            </blockquote>
                            <blockquote class="blockquote">
                                <p class="mb-0 text-center"> 2012-2018 SOHO/End User Support, Desktop installation, Networking products, Printers etc</p>
                            </blockquote>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    
};

export default ResumeCV