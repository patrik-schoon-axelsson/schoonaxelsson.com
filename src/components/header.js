import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Navbar,  Nav, NavDropdown } from 'react-bootstrap'

const Header = ({ siteTitle, wpPages, wpPost }) => (
    <Navbar bg="dark" expand="md" className="mb-4">
          <Navbar.Brand href="/" className="text-white m-1">
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
            <NavDropdown title="Blog Posts">
              {wpPost.map(item => <NavDropdown.Item key={`post-${item.id}`} href={`/blog/${item.slug}`}>{item.title}</NavDropdown.Item>)}
              <NavDropdown.Item><Link to="/blog">Older Blog-posts</Link></NavDropdown.Item>
            </NavDropdown>
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
