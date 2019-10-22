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

import { Hello } from "./Hello"

import Header from "./header"
import "../fonts/f.css"
import "../fonts/tnr.css"
import "./layout.css"

const Frame = styled.div.attrs({
  className: `sans-serif ma0 pa0 bg-white`
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
      <Hello compiler="TypeScript" framework="React" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Frame>
        <main>{children}</main>
        <footer className="tc mv5 silver f6">
          All product names, logos, brands, and artifacts are property of their respective owners. 
        </footer>
      </Frame>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
