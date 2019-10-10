import React, { useState } from "react"
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

  return (
    <figure className={figureClasses}>
      <div style={{ transition: 'width 0.2s ease' }}
           className={imgWrapperClasses} 
           onClick={() => setZoom(!zoom)}>
        <Image src={src} 
               alt={alt} />
      </div>
      <figcaption style={{ transition: 'width 0.2s ease' }}
                  className={figCaptionClasses}
                  dangerouslySetInnerHTML={{ __html: caption }} />
    </figure>
  )
}

export default Figure
