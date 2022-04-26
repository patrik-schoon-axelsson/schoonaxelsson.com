import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row } from 'react-bootstrap';
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <Row>
        <h4 className="text-center">Patrik Schöön-Axelsson - Web Developer, IT Support Specialist, Nerd-for-Hire</h4>
        <figure>
          <blockquote className="blockquote">
            <p className="text-center">"I'm not a NERD like you, so don't you try explaining how this crap works!</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite title="Source Title"className="text-center">A customer, circa 80 years of age, afraid of catching computer-cooties</cite>
          </figcaption>
        </figure>
      </Row>
      <Row>
        <StaticImage src="../images/codecode.png" alt="An image of JavaScript code" placeholder="blurred" width={600} />
      </Row>
      <hr />
      <Row>
        <p className="text-center">
          Welcome to my personal website. I'm a trained web-developer, IT Support Specialist and general computer-nerd living in Borås, Sweden. 
          Currently I work in tech support for a web-hosting provider, with previous experience in customer-support for one of the
          largest ISPs in Sweden, IT-consulting for various small companies and individuals in the publishing-industry around Stockholm.

          Working in the field of technical support, at the intersection of Ops and End-User is an interesting position to find yourself in,
          requiring a lot of communication skills as well as diplomacy. The satisfaction of helping a client effectivize their use of technology
          or just the often quite thrilling process of planning and executing efficient troubleshooting of obscure issues can be an
          extremely interesting and varied position. Working in web hosting, with a client base ranging from professional developers to 
          small-business owners operating ecommerce-projects, means there's always something new!
        </p>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
