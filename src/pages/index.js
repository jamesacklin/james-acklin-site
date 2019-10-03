import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import tachyons from "tachyons"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadlineSVG from '../images/headline.svg'

const Intro = styled.div.attrs({
  className: `pv3-m pv5-l`
})`
  color: white;
  background: black;
`

const Headline = styled.h1.attrs({
  className: `f2 f1-l ma0 pa3 center mw8 lh-title`
})``

const Image = styled.img.attrs({
  src: HeadlineSVG,
  alt: `James Acklin, a coding designer`,
  className: `center`
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

const Highlight = styled.span.attrs({
  className: `black bg-white di pa1`
})``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro>
      <Headline>
        <Image />
      </Headline>
      <Autobiography>
        <p>I&nbsp;am James Acklin, a digital product designer and front-end web developer. I&nbsp;work full-time for Nielsen Media Analytics in Pittsburgh,&nbsp;PA.</p>
        <p>I&nbsp;have created digital experiences and tools on the Web for startups, large agencies, and Fortune 500 companies for about a decade. I&nbsp;have extensive experience with building and designing visual, component-based UI <Highlight>design systems</Highlight> for consistency, aesthetics, accessibility, and usability. I&nbsp;am also a UX general practitioner, leading human-centered design activities and user research&nbsp;efforts.</p>
        <p>I&nbsp;am comfortable in <Highlight>pro-complexity UX vacuums</Highlight> and have extensive experience articulating the business value of human-centered design. My design practice concentrates on high-fidelity <Highlight>prototyping,</Highlight> information design, and living code deliverables. I&nbsp;have a passion for manipulating data and working with the raw material of the&nbsp;web.</p>
        <p>Occasionally, I conduct branding exercises and do general graphic design work for projects I'm interested in or personally connected to. I am not presently accepting freelance&nbsp;opportunities.</p>
      </Autobiography>
    </Intro>
  </Layout>
)

export default IndexPage
