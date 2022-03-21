const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

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