import * as React from "react";
import PropTypes from "prop-types";
import { Container, Navbar,  Nav, NavDropdown } from 'react-bootstrap';

const Header = ({ siteTitle, wpPages, wpPost }) => (
    <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="/" className="text-white">
            {siteTitle}
          </Navbar.Brand>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {wpPages.map(item => 
              <Nav.Link key={item.id} href={`/pages${item.uri}`}>
              {item.title}
            </Nav.Link> 
            )}
            <Nav.Link href={`/resume-cv`}> 
              Resume / CV
            </Nav.Link>
            <NavDropdown title="Blog Posts">
              {wpPost.map(item => <NavDropdown.Item key={`post-${item.id}`} href={`/blog/${item.slug}`}>{item.title}</NavDropdown.Item>)}
              <NavDropdown.Item href={"/blog"}>
                Older Blog-posts
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
