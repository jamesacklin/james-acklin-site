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
    'w-20-l',
    'pl3-l',
    'self-center',
    'f6',
    {
      'dn': zoom,
      'db': !zoom,
      'o-0': zoom,
      'o-100': !zoom
    }
  )

  return (
    <figure className={figureClasses}>
      <div style={{ transition: 'all 0.2s ease' }}
           className={imgWrapperClasses} 
           onClick={() => setZoom(!zoom)}>
        <Image src={src} 
               alt={alt} />
      </div>
      <figcaption style={{ transition: 'all 0.2s ease' }}
      className={figCaptionClasses}
                  dangerouslySetInnerHTML={{ __html: caption }} />
    </figure>
  )
}

export default Figure
