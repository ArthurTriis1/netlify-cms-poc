import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

type Image = IGatsbyImageData & {
  url?: string
}

export type HomeTemplateProps = {
    title: string
    subtitle: string
    image: Image
}

const HomeTemplate = ({ title, subtitle, image }: HomeTemplateProps) => {
    return (
    <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>

        { image?.url ? (
          <img
            src={(image as Image).url }
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: 400,
              width: "100%",
            }}
            // You can optionally force an aspect ratio for the generated image
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
          <GatsbyImage
            image={image as IGatsbyImageData}
            objectFit={"cover"}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: 400,
            }}
            // You can optionally force an aspect ratio for the generated image
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        )}
    </div>
    )
}

export default HomeTemplate