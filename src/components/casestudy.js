import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import tachyons from "tachyons"
import rehypeReact from 'rehype-react'

import Image from './image'
import Figure from './figure'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "figure": Figure }
}).Compiler

const Article = styled.article.attrs({
  className: `mw8 center ph3 pv5`
})``

const Meta = styled.header.attrs ({
  className: ``
})``

const Details = styled.aside.attrs({
  className: `lh-title w-20-l fl-l silver f6 pr4-l`
})``

const Title = styled.div.attrs({
  className: `lh-title`
})``

const Name = styled.h2.attrs({
  className: `f1 mt2 mb0 serif normal`
})`
  letter-spacing: -0.075ch;
`

const Story = styled.div.attrs({
  className: `lh-copy f5`
})`
  & p {
    margin: 0 auto;
    max-width: 30em;
    text-indent: 2ch;
  }

  & p:nth-of-type(1) {
    text-indent: 0;
  }

  & figure {
    clear: both;
  }
`

const CaseStudy = ({ fm, content, ast }) => (
  <Article>
    <Meta>
      <div className="mb3 mb5-l">
        <Image src={fm.image} />
      </div>
      <Details>
        <h4 className="ttu f6 ma0">Company</h4>
        <p className="mt0 mb3">→ {fm.company}</p>
        <h4 className="ttu f6 ma0">Role</h4>
        <p className="mt0 mb3">→ {fm.role}</p>
        <h4 className="ttu f6 ma0">Timeframe</h4>
        <p className="mt0 mb3">→ {fm.time}</p>
        <h4 className="ttu f6 ma0">Team</h4>
        <p className="mt0 mb3">→ {fm.team}</p>
        <h4 className="ttu f6 ma0">Tools</h4>
        <p className="mt0 mb3">→ {fm.tools}</p>
      </Details>
      <Title>
        <h4 className="ttu f6 ma0 ma0 silver">Case Study</h4>
        <Name>{fm.title}</Name>
        <h3 className="f3 mt0 mb4">{fm.description}</h3>
      </Title>
    </Meta>
    <Story>
      {renderAst(ast)}
    </Story>
    
  </Article>
)

export default CaseStudy

/* <Story dangerouslySetInnerHTML={{ __html: content }} /> */