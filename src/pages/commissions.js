import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class CommissionsPage extends React.Component {

    render() {
        const { introText, photo } = this.props.data.contentfulCommissionsPage

        return (
            <Layout>

                <Helmet
                    title="Commissions - Rachel Hawkes Cameron"
                    meta={[
                        { name: 'description', content: introText.introText.substr(0,200) + '...' },
                        { name: 'author', content: 'Rachel Hawkes Cameron' },
                        { name: 'article:publisher', content: 'https://www.instagram.com/rachelhawkescameronart/' },
                        { name: 'og:image', content: 'https:' + photo.fluid.src }
                    ]}
                    >
                </Helmet>

                <article className="about-page grid" itemScope itemType="http://schema.org/ContactPage">
                    <figure className="about-page__image">
                        <Img itemProp="image" fluid={ photo.fluid } alt="Custom Paintings by Rachel Hawkes Cameron" />
                    </figure>

                    <div className="about-page__text">
                        <h1 itemProp="name"><strong>Commissions</strong></h1>
                        <span itemProp="text" dangerouslySetInnerHTML={{ __html: introText.childMarkdownRemark.html }}></span>
                        <form name="contact" method="POST" data-netlify="true">
                            <p><label>Your Name <input type="text" name="name"  required/></label></p>
                            <p><label>Your Email <input type="email" name="email"  required/></label></p>
                            <p><label>Size of Piece <input type="text" name="sizeofpiece" /></label></p>
                            <p><label>Budget Range <input type="text" name="budgetrange" /></label></p>
                            <p><label>Description <textarea name="message" required></textarea></label></p>
                            <p><button type="submit">Send</button></p>
                        </form>
                    </div>
                </article>

            </Layout>
        )
    }
}

export default CommissionsPage

// Grab first CommissionsPage post from Contentful
export const pageQuery = graphql `
{
    contentfulCommissionsPage {
        introText {
            introText
            childMarkdownRemark {
                html
            }
        }
        photo {
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
