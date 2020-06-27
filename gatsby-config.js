/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'im-caelli.github.io',
    author: 'Caelli',
    email: 'im.caelli@gmail.com',
    twitter: 'https://twitter.com/im_caelli',
    tumblr: 'https://im-caelli.tumblr.com/',
    instagram: 'https://www.instagram.com/im.caelli/',
    ao3: 'https://archiveofourown.org/users/im_caelli',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require('autoprefixer'),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path:  `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp', 
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              //maxWidth: 750,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    }
  ],
}
