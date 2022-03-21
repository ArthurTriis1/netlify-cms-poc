/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
        {
          // keep as first gatsby-source-filesystem plugin for gatsby image support
          resolve: "gatsby-source-filesystem",
          options: {
            path: `${__dirname}/static/img`,
            name: "uploads",
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `pages`,
            path: `${__dirname}/markups/pages`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `pages`,
            path: `${__dirname}/markups/collections/posts`,
          },
        },
        {
          resolve: "gatsby-source-filesystem",
          options: {
            path: `${__dirname}/src/images`,
            name: "images",
          },
        },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve:"gatsby-plugin-netlify-cms",       
      options: {
        modulePath: `${__dirname}/src/cms/cms.ts`,
      },
    },
    "gatsby-plugin-netlify"
]
};