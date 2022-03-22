import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react';


  export type ImageProps = {
    image: IGatsbyImageData & {
        url?: string
      }
}

const Image = ({ image }: ImageProps) => {
  return (
      <>
    { image?.url ? (
        <img
          src={image.url }
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
      </>

  )
}

export default Image;