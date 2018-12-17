import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import '../scss/layout.scss'

require('typeface-lato')

class Layout extends React.Component {

    render() {
        const { children, isHome } = this.props

        // Set up page meta data
        let metaData

        if ( this.props.metaData ) {
            metaData = this.props.metaData
            metaData.title += ' - Rachel Hawkes Cameron'
        }
        else {
            metaData = {
                title: "Rachel Hawkes Cameron",
                description: "Painter and illustrator from Hamilton, Canada."
            }
        }

        return (
            <>
                <Helmet
                title={metaData.title}
                meta={[
                    { name: 'description', content: metaData.description },
                    { name: 'keywords', content: 'Hamilton painter, Hamilton illustrator, Toronto painter, Toronto illustrator' },
                ]}
                >
                <html lang="en" />
                </Helmet>
                <Header isHome={isHome} />
                <main>{children}</main>
                <Footer />
            </>
        )
    }
}

    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }

export default Layout
