import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import React from 'react'
import HomeTemplate from '../templates/HomeTemplate';

const index = ({ data }: any)  => {
  console.log(data)

  const { frontmatter } = data.markdownRemark;


  return (<HomeTemplate image={getImage(frontmatter.image)!} title={frontmatter.title} />)
}

export default index

export const pageQuery = graphql`
query MyQuery {
  markdownRemark(
    frontmatter: {title: {eq: "fsdafsdfdsftestfasdfasdfasdfadfsdfdffdfwrrqrw"}}
  ) {
    frontmatter {
      title
      image {
        childImageSharp {
          
          gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
        }
      }
    }
  }
}

`;