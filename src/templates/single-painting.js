import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout';

class PaintingPost extends Component {

    render() {
        const { prev, next } = this.props.pageContext
        const { name, description, images, etsyUrl, isSold } = this.props.data.contentfulPainting

        return (

            <Layout>

                <Helmet
                    title={`${name} - Rachel Hawkes Cameron`}
                    meta={[
                        { name: 'description', content: description.description },
                        { name: 'og:image', content: 'https:' + images[0].src }
                    ]}
                    >
                </Helmet>

                <article className="painting" itemScope itemType="http://schema.org/Painting">

                    <div className="painting__header grid">

                        {/* Title */}
                        <h1 itemProp="name"><strong>{name}</strong></h1>

                        {/* Description */}
                        <div className="painting__description" itemProp="text" dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html }} />

                        {/* Etsy Link */}
                        { ( etsyUrl && !isSold ) &&
                            <span className="painting__for-sale-link">
                            <a  href={etsyUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            For Sale on Etsy
                            </a>
                            </span>
                        }
                    </div>

                    <div className="painting__details grid">
                        {images.map((image, i) => (
                            <Img itemProp="image" fluid={image.fluid} key={i} />
                        ))}
                    </div>

                </article>

                <nav className="prev-next-links grid">
                    <ul>
                        { ( prev && prev.node ) &&
                            <li className="prev-link">
                                <Link to={`/${prev.node.slug}`}>{prev.node.name}</Link>
                            </li>
                        }
                        { ( next && next.node ) &&
                            <li className="next-link">
                                <Link to={`/${next.node.slug}`}>{next.node.name}</Link>
                            </li>
                        }
                    </ul>
                </nav>

            </Layout>
        )
    }
}

PaintingPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default PaintingPost

export const pageQuery = graphql`
    query paintingPostQuery($slug: String!){
        contentfulPainting(slug: {eq: $slug}) {
            name
            description {
                description
                childMarkdownRemark {
                    html
                }
            }
            images {
                fluid(quality: 90, maxWidth: 1030) {
                    aspectRatio
                    sizes
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
                file {
                    url
                }
            }
            etsyUrl
            isSold
        }
    }
`
