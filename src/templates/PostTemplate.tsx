import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { Head } from '../components/Header';
import Image, { ImageProps } from '../components/Image';
import Layout from '../components/Layout';
import { Markdown } from '../components/Markdown';

export type PostTemplate = {
    title: string
    thumb: ImageProps['image']
    html: string
}

const PostTemplate = ({ title, thumb, html }: PostTemplate) => {
  return (
    <Layout>
        <Head>{title}</Head>
        <Image image={thumb}/>
        <Markdown dangerouslySetInnerHTML={{__html: html}}></Markdown>
    </Layout>
    )
}

export default PostTemplate;