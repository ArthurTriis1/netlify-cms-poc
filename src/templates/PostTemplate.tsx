import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { Head } from '../components/Header';
import Image, { ImageProps } from '../components/Image';
import Layout from '../components/Layout';

export type PostTemplate = {
    title: string
    thumb: ImageProps['image']
    html: string
}

const PostTemplate = ({ title, thumb, html }: PostTemplate) => {
  return (
    <Layout>
        <Head style={{color: 'red'}}>{title}</Head>
        <Image image={thumb}/>
        <div style={{color: 'purple'}} dangerouslySetInnerHTML={{__html: html}}></div>
    </Layout>
    )
}

export default PostTemplate;