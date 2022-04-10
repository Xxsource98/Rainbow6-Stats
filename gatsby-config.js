module.exports = {
    pathPrefix: "/rainbow6-stats",
    siteMetadata: {
        title: `rainbow-six-siege-stats`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                jsxPragma: `jsx`,
                allExtensions: true
            },
        },
        "gatsby-plugin-mantine",
        "gatsby-plugin-sass",
        "gatsby-plugin-use-query-params"
    ],
}
