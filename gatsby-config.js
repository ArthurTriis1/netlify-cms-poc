/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve:"gatsby-plugin-netlify-cms",       
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    }
]
};