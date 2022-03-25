import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import * as S from './styles'
import React from 'react';

export type ImageSrc = {
  url: string
}

export type ImageProps = {
    image: IGatsbyImageData | ImageSrc
}

const Image = ({ image }: ImageProps) => {
  return (
      <>
    { (image as ImageSrc).url ? (
        <S.Image
          src={(image as ImageSrc).url}
          alt=""
        />
      ) : (
        <S.GImage
          image={image as IGatsbyImageData}
          objectFit={"cover"}
          alt=""
        />
      )}
      </>

  )
}

export default Image;