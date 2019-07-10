import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

class PaintingPreview extends React.Component {

    render() {
        const {id, slug, name, images, isSold} = this.props.paintingData

        return (
            <Link className="painting-preview" to={`/${slug}`} key={id}>
                { isSold ?
                    <div className="painting-preview__is-sold-badge"><p>SOLD</p></div> : null
                }
                <div className="painting-preview__image">
                    <Img fluid={images[0].fluid} alt={images[0].title} />
                </div>
                <div className="painting-preview__details">
                    <p>{name}</p>
                </div>
            </Link>
        )
    }
}

export default PaintingPreview;
