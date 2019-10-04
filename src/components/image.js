// From https://github.com/gatsbyjs/gatsby/issues/10482#issuecomment-486266811
// This is wonky, but we're fetching all the image nodes, then filtering within
// that set to match the `src` prop. Surely there's a better way to do this?

import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => (
    data.allFile.edges.find(({ node }) => src === node.relativePath)
  ), [ data, src ])

  return (
    <Img
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  )
}

export default Image