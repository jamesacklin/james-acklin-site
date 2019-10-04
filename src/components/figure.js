import React from "react"
import Image from "./image"

const Figure = ({ src, alt, caption }) => (
  <figure className="mh0 mv3 mv5-l cf flex-l ">
    <Image className="w-80-l" src={src} alt={alt} />
    <figcaption className="w-20-l pl3-l self-center f6" dangerouslySetInnerHTML={{ __html: caption }} />
  </figure>
)

export default Figure
