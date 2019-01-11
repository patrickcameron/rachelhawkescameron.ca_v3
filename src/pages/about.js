import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class AboutPage extends React.Component {

    render() {
        const { name, bio, portrait } = this.props.data.contentfulAboutPage

        return (
            <Layout>

                <Helmet
                    title="About - Rachel Hawkes Cameron"
                    meta={[
                        { name: 'description', content: bio.bio.substr(0,200) + '...' },
                        { name: 'author', content: 'Rachel Hawkes Cameron' },
                        { name: 'article:publisher', content: 'https://www.instagram.com/rachelhawkescameronart/' },
                        { name: 'og-type', content: 'article' },
                        { name: 'og:image', content: 'https:' + portrait.fluid.src }
                    ]}
                    >
                </Helmet>

                <article className="about-page grid" itemScope itemType="http://schema.org/AboutPage">
                    <figure className="about-page__image">
                        <Img itemProp="image" fluid={ portrait.fluid } alt="Portrait of Rachel Hawkes Cameron" />
                    </figure>

                    <div className="about-page__text">
                        <h1 itemprop="name"><strong>{ name }</strong></h1>
                        <span itemProp="text" dangerouslySetInnerHTML={{ __html: bio.childMarkdownRemark.html }}></span>
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
            bio
            childMarkdownRemark {
                html
            }
        }
        portrait {
            fluid(quality: 90, maxWidth: 580) {
                aspectRatio
                sizes
                src
                srcSet
                srcWebp
                srcSetWebp
            }
        }
    }
}
`
