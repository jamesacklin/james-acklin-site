import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      margin: `0 auto`,
      maxWidth: 740,
      padding: ``,
      paddingTop: 0
    }}>
      <h1>James Acklin is a coding UX designer who lives, works, and rides bikes in Pittsburgh, Pennsylvania.</h1>
      <div style={{ columnCount: 2 }}>
        <p>I am James Acklin, a digital product designer and front-end web developer focused on usability, prototyping, and design systems.</p>
        <p>I work full-time for Nielsen Media Analytics* in Pittsburgh, PA. I have created digital experiences and tools on the Web for startups, large agencies, and Fortune 500 companies† for about a decade.</p>
        <p>I am comfortable in pro-complexity UX vacuums and have extensive experience articulating the business value of human-centered design. My design practice concentrates on high-fidelity prototyping, information design, and living code deliverables. I have a passion for manipulating data and working with the raw material of the web.‡</p>
        <p>Occasionally I conduct branding exercises, help software companies and websites with interaction design problems, and do general graphic design work on the side. I am not currently accepting freelance engagements.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
