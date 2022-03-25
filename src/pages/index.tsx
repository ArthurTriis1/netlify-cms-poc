import { graphql } from 'gatsby'
import { getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';
import React from 'react'
import { GetIndexDataQuery } from '../__generated__/graphqlTypes';
import HomeTemplate from '../templates/HomeTemplate';
import { ImageProps } from '../components/Image';

const index = ({ data }: {data: GetIndexDataQuery})  => {
  const { frontmatter } = data.markdownRemark;

  const posts = data.allMarkdownRemark.nodes.map((node) => ({
    title: node.frontmatter.title,
    slug: node.fields.slug,
    time: node.timeToRead,
    image: getImage(node.frontmatter.thumb as ImageDataLike)!
  }))

  return (<HomeTemplate image={getImage(frontmatter.image as ImageDataLike)!} title={frontmatter!.title!} posts={posts} />)
}

export default index

export const pageQuery = graphql`
query getIndexData {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "posts"}}}) {
    nodes {
      frontmatter {
        title
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      fields {
        slug
      }
      timeToRead
    }
  }
}`;