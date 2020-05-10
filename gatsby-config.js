module.exports = {
  siteMetadata: {
    title: `IdéeCode`,
    description: `Agence de développemnt web et mobile`,
    author: `Jérémy Diard - IdéeCode`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `k87qzx4q1mp2`,
        accessToken: `Vsn2QKd6oda2IiRvZs_aT4oMcz31BqmOHK9p-acVI64`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IdéeCode`,
        short_name: `idéecode`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
      
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
