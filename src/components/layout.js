/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
// eslint-disable-next-line
import tachyons from "tachyons"

import Header from "./header"
import "../fonts/f.css"
import "./layout.css"

const Frame = styled.div.attrs({
  className: `sans-serif ma0 pa0`
})``

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Frame>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </Frame>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
