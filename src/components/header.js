import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {

    render() {
        const isHome = this.props.isHome

        return (

            <header className="header grid">

                { !isHome && <Link to="/">Rachel Hawkes Cameron</Link> }

                <nav>
                    <ul>
                        { !isHome && <li className="home-link"><Link to="/">Home</Link></li> }
                        <li><Link to="/about">About</Link></li>
                        <li><a href="mailto:rachelcameron@gmail.com">Contact</a></li>
                        <li><a
                            href="https://www.etsy.com/ca/shop/rachelhawkescameron"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Etsy Store</a></li>
                        <li><a
                            href="https://www.instagram.com/rachelhawkescameronart/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Instagram</a></li>
                    </ul>
                </nav>

            </header>
        )
    }
}

export default Header
