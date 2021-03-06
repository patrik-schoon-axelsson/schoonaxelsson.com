/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer.js";
import Header from "./header.js";
// import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allWpPage {
        nodes {
          title
          uri
          id
        }
      }
      allWpPost(limit: 5, sort: {fields: date, order: DESC}) {
        nodes {
          title
          slug
          id
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} wpPages={data.allWpPage.nodes} wpPost={data.allWpPost.nodes} />
          <main style={{minHeight: '80vh'}}>
            {children}
          </main>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
