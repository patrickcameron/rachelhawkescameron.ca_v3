const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const paintingTemplate = path.resolve(`src/templates/single-painting.js`)
        resolve(
            graphql(`
                {
                  allContentfulPainting(sort: { fields: [createdAt], order: DESC }){
                    edges {
                      node {
                        name
                        slug
                      }
                    }
                  }
                }
            `).then((result) => {
                if(result.errors) {
                    reject(result.errors)
                }
                const paintings = result.data.allContentfulPainting.edges
                paintings.forEach((edge, index) => {
                    createPage({
                        path: edge.node.slug,
                        component: paintingTemplate,
                        context: {
                            slug: edge.node.slug,
                            // Previous and Next post links
                            prev: index === 0 ? null : paintings[ index - 1 ],
                            next: index === result.length - 1 ? null : paintings[ index + 1 ]
                        }
                    })
                })
                return
            })
        )
    })
}
