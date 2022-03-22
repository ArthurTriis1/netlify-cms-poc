import { Link } from 'gatsby'
import React from 'react'
import { Head } from '../components/Header'
import Image, { ImageProps } from '../components/Image'
import Layout from '../components/Layout'



export type HomeTemplateProps = {
    title: string
    image: ImageProps['image']
    posts: Array<{ title: string, slug: string }>
}

const HomeTemplate = ({ title, image, posts }: HomeTemplateProps) => {
    return (
    <Layout>
        <Head>{title}</Head>

      <Image image={image}/>

      {
        posts.map(post => (
          <Link to={`/${post.slug}`}>{post.title}</Link>
        ))
      }

    </Layout>
    )
}

export default HomeTemplate