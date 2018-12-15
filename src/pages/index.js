import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PaintingPreview from '../components/painting-preview'
import bannerImg from '../images/rachel_hawkes_cameron_art.jpg'

class IndexPage extends React.Component {

    render() {
        const { data } = this.props

        return (
            <Layout isHome={true}>


                <div className="site-intro grid">
                    <img className="site-intro__img" src={bannerImg} alt="" />
                    <h1 className="site-intro__text"><strong>Rachel Hawkes Cameron</strong><br/> is a painter and illustrator<br/> from Hamilton, Canada.</h1>
                </div>

                <div className="painting-preview-wrapper">
                    <div className="painting-preview-inner-wrapper">
                    {data.allContentfulPainting.edges.map((edge) => {
                        return (
                            <PaintingPreview key={edge.node.id} paintingData={edge.node} />
                        )
                    })}
                    </div>
                </div>

            </Layout>
        )
    }
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery
    {
        allContentfulPainting (
            filter: { createdAt: {ne: null} }
        ){
            edges {
                node {
                    id
                    name
                    slug
                    isSold
                    images {
                        fluid {
                            aspectRatio
                            src
                            srcSet
                            sizes
                        }
                        file {
                            url
                        }
                    }
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }
`
