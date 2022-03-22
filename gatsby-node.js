const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node) // convert image paths for gatsby images
  
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value: slug.slice(12),
      })
    }
  }


  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      query getAllPostsSlugs {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "posts"}}}) {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `).then((result) => {
      const posts = result.data.allMarkdownRemark.nodes
  
      posts.forEach(({ fields }) => {
        createPage({
          path: fields.slug,
          component: path.resolve(`./src/generated-pages/PostGeneratedTemplate.tsx`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: fields.slug,
          },
        })
      })
  
    })
  }