import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import tachyons from "tachyons"

import Image from './image'

const Article = styled.article.attrs({
  className: `pv3-m pv5-l ma0 pa3 center mw8 lh-copy black bg-white`
})``

const Meta = styled.header.attrs ({
  className: ``
})``

const Details = styled.aside.attrs({
  className: `b--black ba bw-1 pa0 fl-l w-20-l`
})`
  & > * {
    margin: 0; padding: 0 0.5em;
  }

  & > *:nth-child(2n+1){
    padding-top: 0.5em;
  }

  & > *:nth-child(2n+2){
    padding-bottom: 0.5em;
    border-bottom: 1px solid black;
  }

  & > *:nth-last-child(1) {
    border-bottom: none;
  }
`

const Title = styled.div.attrs({
  className: `lh-title bt-l bl-m br bb bw-1 b--black ph2 pt2 mb3 fl-l w-80-l`
})``

const Story = styled.div.attrs({
  className: ``
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
      <div className="bt bl br bw-1 b--black">
        <Image />
      </div>
      <Details>
        <h4 className="ttu f6">Company</h4>
        <p>{fm.company}</p>
        <h4 className="ttu f6">Role</h4>
        <p>{fm.role}</p>
        <h4 className="ttu f6">Timeframe</h4>
        <p>{fm.time}</p>
        <h4 className="ttu f6">Tools</h4>
        <p>{fm.tools}</p>
      </Details>
      <Title>
        <h4 className="ttu f6 ma0">Case Study</h4>
        <h2 className="f2 ma0">{fm.title}</h2>
        <h3 className="f3 mt2 mb3">{fm.description}</h3>
      </Title>
    </Meta>
    <Story>
      {content}
    </Story>
  </Article>
)

export default CaseStudy