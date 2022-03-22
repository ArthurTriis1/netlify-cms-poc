import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import React from 'react'
import HomeTemplate from '../templates/HomeTemplate';

const index = ({ data }: any)  => {
  const { frontmatter } = data.markdownRemark;

  const posts = data.allMarkdownRemark.nodes.map((node: { frontmatter: { title: string; }; fields: { slug: string; }; }) => ({
    title: node.frontmatter.title,
    slug: node.fields.slug
  }))

  console.log(posts)

  return (<HomeTemplate image={getImage(frontmatter.image)!} title={frontmatter.title} posts={posts} />)
}

export default index

export const pageQuery = graphql`
query getIndexData {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      image {
        childImageSharp {
          gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
        }
      }
    }
  }
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "posts"}}}) {
    nodes {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
}`;