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
                    <div className="site-intro__text">
                        <h1>Rachel Hawkes Cameron</h1>
                        <h2>is a painter and illustrator<br/> from Hamilton, Canada.</h2>
                    </div>
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
        allContentfulPainting(sort: { fields: [createdAt], order: DESC }){
            edges {
                node {
                    id
                    name
                    slug
                    isSold
                    images {
                        title
                        fluid(maxWidth: 768) {
                            aspectRatio
                            src
                            srcSet
                            sizes
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
            }
        }
    }
`
