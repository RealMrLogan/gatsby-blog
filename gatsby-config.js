module.exports = {
  siteMetadata: {
    siteUrl: "https://blog.mrlogan.dev",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    }
  ],
};
