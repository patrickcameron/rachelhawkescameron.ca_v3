import React from 'react'
import { Link } from 'gatsby'

class PaintingPreview extends React.Component {

    render() {
        const {id, slug, name, images, isSold} = this.props.paintingData

        return (
            <Link className="painting-preview" to={slug} key={id}>
                { isSold ?
                    <div className="painting-preview__is-sold-badge"><p>SOLD</p></div> : null
                }
                <div className="painting-preview__image">
                    <img src={`https:${images[0].file.url}?w=1000&fit=pad&q=80`} alt="" />
                </div>
                <div className="painting-preview__details">
                    <p>{name}</p>
                </div>
            </Link>
        )
    }
}

export default PaintingPreview;
