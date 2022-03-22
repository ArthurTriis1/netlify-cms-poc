import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import Image, { ImageProps } from '../components/Image';

export type PostTemplate = {
    title: string
    thumb: ImageProps['image']
    html: string
}

const PostTemplate = ({ title, thumb, html }: PostTemplate) => {
  return (
    <>
        <h1 style={{color: 'red'}}>{title}</h1>
        <Image image={thumb}/>
        <div style={{color: 'purple'}} dangerouslySetInnerHTML={{__html: html}}></div>
    </>
    )
}

export default PostTemplate;