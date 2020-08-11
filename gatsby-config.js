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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://gmail.us3.list-manage.com/subscribe/post?u=ca92fc98b52b5cb9cbf91b82e&amp;id=11c8f61b86', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  }
    // this (optional) plugin enables Prosbygressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
