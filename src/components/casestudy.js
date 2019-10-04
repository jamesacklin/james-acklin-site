import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import tachyons from "tachyons"

import Image from './image'

const Article = styled.article.attrs({
  className: `mw8 center ph3 pv5`
})``

const Meta = styled.header.attrs ({
  className: ``
})``

const Details = styled.aside.attrs({
  className: `lh-title w-20-l fl-l light-silver f5`
})``

const Title = styled.div.attrs({
  className: `lh-title w-80-l`
})``

const Story = styled.div.attrs({
  className: `lh-copy f5`
})`
  & > p {
    margin: 0 auto;
    max-width: 30em;
    text-indent: 2ch;
  }

  & > p:nth-of-type(1) {
    text-indent: 0;
  }
`

const CaseStudy = ({ fm, content }) => (
  <Article>
    <Meta>
      <div className="">
        <Image />
      </div>
      <Details>
        <h4 className="ttu f6 ma0">Company</h4>
        <p className="mt0 mb3">{fm.company}</p>
        <h4 className="ttu f6 ma0">Role</h4>
        <p className="mt0 mb3">{fm.role}</p>
        <h4 className="ttu f6 ma0">Timeframe</h4>
        <p className="mt0 mb3">{fm.time}</p>
        <h4 className="ttu f6 ma0">Team</h4>
        <p className="mt0 mb3">{fm.team}</p>
        <h4 className="ttu f6 ma0">Tools</h4>
        <p className="mt0 mb3">{fm.tools}</p>
      </Details>
      <Title>
        <h4 className="ttu f6 ma0 ma0">Case Study</h4>
        <h2 className="f2 ma0">{fm.title}</h2>
        <h3 className="f3 mt2 mb4">{fm.description}</h3>
      </Title>
    </Meta>
    <Story dangerouslySetInnerHTML={{ __html: content }} />
  </Article>
)

export default CaseStudy