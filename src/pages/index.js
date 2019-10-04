import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
// eslint-disable-next-line
import tachyons from "tachyons"
import Particles from 'react-particles-js';

import Layout from "../components/layout"
import SEO from "../components/seo"
import CaseStudy from "../components/casestudy"
import HeadlineSVG from '../images/headline.svg'

const Intro = styled.div.attrs({
  className: `pv3-m pv5-l relative`
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
  & > p {
    margin: 0 auto;
    max-width: 30em;
    text-indent: 2ch;
  }

  & > p:nth-of-type(1) {
    text-indent: 0;
  }
  @media (min-width: 58.125rem){ 
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

const IndexPage = () =>  {
  const data = useStaticQuery(graphql`
    query CaseStudies {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              company
              description
              role
              team
              title
              tools
              time
            }
          }
        }
      }
    }
  `)

  const particlesOptions = {
      "particles": {
        "number": {
          "value": 32,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 200,
          "color": "#ffffff",
          "opacity": 1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "retina_detect": true
  }

  return (
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
        <Particles params={particlesOptions} className="absolute top-0 left-0 w-100 h-100" />
      </Intro>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        return <CaseStudy key={index}
                          fm={edge.node.frontmatter}
                          content={edge.node.html} />
      })}
    </Layout>
  )
}

export default IndexPage
