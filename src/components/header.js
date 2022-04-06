import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Navbar,  Nav } from 'react-bootstrap'

const Header = ({ siteTitle, wpPages }) => (
    <Navbar bg="dark" expand="md">
          <Navbar.Brand href="/" className="text-white mr-4 ml-0">
            {siteTitle}
          </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {wpPages.map(item => 
              <Nav.Link key={item.id} href={`/pages${item.uri}`}>
              {item.title}
            </Nav.Link> 
            )}
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
