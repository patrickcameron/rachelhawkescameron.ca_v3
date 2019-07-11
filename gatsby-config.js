//
// 1. Grab Contentful API keys from Netlify environment variables or local .env file
//
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

let contentfulConfig

try {
    // Load the Contentful config from the .contentful.json
    contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
    throw new Error(
        'Contentful spaceId and the delivery token need to be provided.'
    )
}

//
// 2. Set up plugins
//
module.exports = {
    siteMetadata: {
        siteUrl: 'https://rachelhawkescameron.com',
        title: 'Rachel Hawkes Cameron',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-68052819-7',
                respectDNT: true,
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: contentfulConfig

        },
        'gatsby-transformer-remark', // Load after gatsby-source-contentful
        'gatsby-transformer-sharp',
        'gatsby-plugin-sass',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui'
            },
        },
    ],
}

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
