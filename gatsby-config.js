module.exports = {
  siteMetadata: {
    title: "Lolo Blog - Personal Finance & Budgeting Tips",
    description: "Expert advice on personal finance, budgeting strategies, and money-saving tips for modern living.",
    author: "JW",
    siteUrl: "https://your-domain.com",
    social: {
      twitter: "@yourtwitterhandle",
      linkedin: "your-linkedin-profile",
    },
    language: "en",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/posts/`, // Path for blog posts
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`, // Path for images
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 90,
              linkImagesToOriginal: false,
              withWebp: true,
              showCaptions: true,
              backgroundColor: 'transparent',
              wrapperStyle: `margin: 2rem 0;`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-XXXXXXXXXX", // Replace with your Google Analytics tracking ID
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://your-domain.com',
        sitemap: 'https://your-domain.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap',
        exclude: ['/404', '/404.html', '/dev-404-page'],
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        packages: [
          `gatsby-plugin-image`,
        ],
      },
    },
  ],
};