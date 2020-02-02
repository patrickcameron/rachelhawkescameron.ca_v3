import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import '../scss/layout.scss'
import bannerImg from '../images/rachel_hawkes_cameron.jpg'

require('typeface-lato')


class Layout extends React.Component {

    render() {
        const { children, isHome } = this.props

        return (
            <>
                <Helmet
                title="Rachel Hawkes Cameron"
                meta={[
                    { name: 'description', content: "Rachel Hawkes Cameron is a painter and illustrator from Hamilton, Canada." },
                    { name: 'keywords', content: 'Hamilton painter, Hamilton illustrator, Toronto painter, Toronto illustrator, Canadian artist, Canadian painter' },
                    { name: 'google-site-verification',  content: 'PuWXzRCsyekukWviRC8ttBgo70TTY5YCJW9jeqkus-Y' },
                    { name: 'og:image', content: bannerImg },
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
