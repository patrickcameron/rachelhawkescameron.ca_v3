import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class AboutPage extends React.Component {

    render() {
        const { name, bio, portrait } = this.props.data.contentfulAboutPage

        return (
            <Layout>

                <article className="about-page grid">
                    <figure className="about-page__image">
                        <Img fluid={ portrait.fluid } alt="Portrait of Rachel Hawkes Cameron" />
                    </figure>

                    <div className="about-page__text">
                        <h1><strong>{ name }</strong></h1>
                        <span dangerouslySetInnerHTML={{ __html: bio.childMarkdownRemark.html }}></span>
                    </div>
                </article>

            </Layout>
        )
    }
}

export default AboutPage

// Grab first AboutPage post from Contentful
export const pageQuery = graphql `
{
    contentfulAboutPage {
        name
        bio {
            childMarkdownRemark {
                html
            }
        }
        portrait {
            fluid(quality: 90, maxWidth: 580) {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
            }
        }
    }
}
`
