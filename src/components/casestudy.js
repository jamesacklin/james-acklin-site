import React from "react"
import styled from "styled-components"
import Image from "./image"
// eslint-disable-next-line
import tachyons from "tachyons"

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


const CaseStudy = () => (
  <Article>
    <Meta>
      <div class="bt bl br bw-1 b--black">
        <Image />
      </div>
      <Details>
        <h4 class="ttu f6">Company</h4>
        <p>The Nielsen Company</p>
        <h4 class="ttu f6">Role</h4>
        <p>Designer, Front-End Developer</p>
        <h4 class="ttu f6">Timeframe</h4>
        <p>6-8 Weeks</p>
        <h4 class="ttu f6">Tools</h4>
        <p>Photoshop</p>
      </Details>
      <Title>
        <h4 class="ttu f6 ma0">Case Study</h4>
        <h2 class="f2 ma0">Rhiza User Bifurcation</h2>
        <h3 class="f3 mt2 mb3">A quick description to show people what this is about.</h3>
      </Title>
    </Meta>
    <Story>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      <figure>
        <Image />
      </figure>
    </Story>
  </Article>
)

export default CaseStudy