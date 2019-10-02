import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import tachyons from "tachyons"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Intro = styled.div.attrs({
  className: `pv3-m pv5-l`
})`
  color: white;
  background: black;
`

const Headline = styled.h1.attrs({
  className: `f2 f1-l mt0 pa3 center mw8 lh-title`
})``

const Autobiography = styled.div.attrs({
  className: "ma0 pa3 center mw8 f4 lh-copy"
})`
  & > :first-child {
    margin-top: 0;
  }
  @media (min-width: 860px){ 
    & { 
      column-count: 2;
    }
    & > * {
      break-inside: avoid;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro>
      <Headline>
        James Acklin is a coding UX designer who lives, works, and rides bikes in Pittsburgh, Pennsylvania.
      </Headline>
      <Autobiography>
        <p>I am James Acklin, a digital product designer and front-end web developer. I work full-time for Nielsen Media Analytics in Pittsburgh, PA.</p>
        <p>I have created digital experiences and tools on the Web for startups, large agencies, and Fortune 500 companies for about a decade. I have extensive experience with building and designing visual, component-based UI design systems for consistency, aesthetics, accessibility, and usability. I am also a UX general practitioner, leading human-centered design activities and user research efforts.</p>
        <p>I am comfortable in pro-complexity UX vacuums and have extensive experience articulating the business value of human-centered design. My design practice concentrates on high-fidelity prototyping, information design, and living code deliverables. I have a passion for manipulating data and working with the raw material of the web.</p>
        <p>Occasionally, I conduct branding exercises and do general graphic design work for projects I'm interested in or personally connected to. I am not presently accepting freelance opportunities.</p>
      </Autobiography>
    </Intro>
  </Layout>
)

export default IndexPage
