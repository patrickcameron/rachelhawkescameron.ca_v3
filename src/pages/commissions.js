// Based on: https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/master/src/pages/contact/index.js

import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class CommissionsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isValidated: false }
    }

    componentDidMount() {
        if ( this.props.location.search.substring(1) === 'success=true' ) {
            console.log( this.props.location.search.substring(1) );
            document.getElementById( 'success-message' ).classList.add('is-visible');
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch( '/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error))
    }

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

                    <div id="success-message">
                        <p><strong>Success!</strong> Your message has been sent.</p>
                    </div>

                    <figure className="about-page__image">
                        <Img itemProp="image" fluid={ photo.fluid } alt="Custom Paintings by Rachel Hawkes Cameron" />
                    </figure>

                    <div className="about-page__text">

                        <h1 itemProp="name"><strong>Commissions</strong></h1>
                        <span itemProp="text" dangerouslySetInnerHTML={{ __html: introText.childMarkdownRemark.html }}></span>

                        <form
                            id="contact-form"
                            name="contact"
                            method="post"
                            action="/commissions/?success=true"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={this.handleSubmit}>
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden><label>Don’t fill this out:{' '} <input type={'text'} name="bot-field" onChange={this.handleChange} /></label></p>
                            <p><label>Your Name <input type={'text'} name={'name'} required={true} onChange={this.handleChange} /></label></p>
                            <p><label>Your Email <input type={'email'} name={'email'} required={true} onChange={this.handleChange} /></label></p>
                            <p><label>Size of Piece <input type={'text'} name={'sizeofpiece'} onChange={this.handleChange} /></label></p>
                            <p><label>Budget Range <input type={'text'} name={'budgetrange'} onChange={this.handleChange} /></label></p>
                            <p><label>Description <textarea name={'message'} required={true} onChange={this.handleChange} ></textarea></label></p>
                            <p><input type="submit" value="Send" /></p>
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
