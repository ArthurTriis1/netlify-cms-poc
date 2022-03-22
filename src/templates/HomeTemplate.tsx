import { Link } from 'gatsby'
import React from 'react'
import Image, { ImageProps } from '../components/Image'



export type HomeTemplateProps = {
    title: string
    image: ImageProps['image']
    posts: Array<{ title: string, slug: string }>
}

const HomeTemplate = ({ title, image, posts }: HomeTemplateProps) => {
    return (
    <div>
        <h1>{title}</h1>

      <Image image={image}/>

      {
        posts.map(post => (
          <Link to={`/${post.slug}`}>{post.title}</Link>
        ))
      }

    </div>
    )
}

export default HomeTemplate