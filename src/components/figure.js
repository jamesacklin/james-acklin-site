import React, { useState } from "react"
import styled from "styled-components"
import classNames from "classnames"
import Image from "./image"

const Figure = ({ src, alt, caption }) => {
  const [zoom, setZoom] = useState(false);

  const figureClasses = classNames(
    'mh0',
    'mv3',
    'mv5-l',
    'cf',
    'flex-l',
    'figure-zoomable',
    {
      'figure-zoom': zoom
    }
  )

  const imgWrapperClasses = classNames(
    {
      'w-100-l': zoom,
      'w-80-l': !zoom
    }
  )

  const figCaptionClasses = classNames(
    'mt3',
    'mt0-l',
    'self-center',
    'f6',
    {
      'pl3-l': !zoom,
      'w-20-l': !zoom,
      'o-100': !zoom,
      'o-0': zoom
    }
  )

  const FigureElement = styled.figure.attrs({
    className: figureClasses
  })`
    cursor: zoom-in;

    &.figure-zoom {
      position: relative;
      cursor: zoom-out;
    }
    @media (min-width: 960px){
      &.figure-zoom {
        width: 100%;
        margin-left: 0%;
      }
    }
    
    @media (min-width: 1320px){
      &.figure-zoom {
        width: 112.5%;
        margin-left: -6.25%;
      }
    }
    
    @media (min-width: 1600px){
      &.figure-zoom {
        width: 125%;
        margin-left: -12.5%;
      }
    }
    
    @media (min-width: 2000px){
      &.figure-zoom {
        width: 150%;
        margin-left: -25%;
      }
    }
  `

  const ClickWrapper = styled.div.attrs({
    className: imgWrapperClasses
  })``

  const Caption = styled.figcaption.attrs({
    className: figCaptionClasses
  })`
    .figure-zoom & {
      width: 0px;
    }
  `

  return (
    <FigureElement>
      <ClickWrapper onClick={() => setZoom(!zoom)}>
        <Image src={src} 
               alt={alt} />
      </ClickWrapper>
      <Caption dangerouslySetInnerHTML={{ __html: caption }} />
    </FigureElement>
  )
}

export default Figure
