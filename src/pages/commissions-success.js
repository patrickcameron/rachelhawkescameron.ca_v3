// Based on: https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/master/src/pages/contact/index.js

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class CommissionsSuccessPage extends React.Component {


    render() {

        return (
            <Layout>

                <Helmet title="Message Success - Rachel Hawkes Cameron">
                </Helmet>

                <article className="about-page grid" itemScope itemType="http://schema.org/ContactPage">

                    <div id="success-message">
                        <p><strong>Success!</strong> Your message has been sent.</p>
                        <p><strong><a href="/commissions">⬅ Go back</a></strong></p>
                    </div>

                </article>

            </Layout>
        )
    }
}

export default CommissionsSuccessPage
