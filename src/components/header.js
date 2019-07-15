import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {

    componentDidMount() {
        const navMenu = document.getElementById('js--header-nav');
        const navMenuLinks = Object.values( navMenu.getElementsByTagName('a') );

        navMenuLinks.forEach( link => {
            if ( window.location.pathname === link.getAttribute('href') ) {
                link.classList.add('is-current-page');
            } else {
                link.classList.remove('is-current-page');
            }
        } );
    }

    render() {
        const isHome = this.props.isHome

        return (

            <header className="header grid">

                { !isHome && <Link to="/">Rachel Hawkes Cameron</Link> }

                <nav>
                    <ul id="js--header-nav">
                        { !isHome && <li className="home-link"><Link to="/">Home</Link></li> }
                        <li><Link to="/about">About</Link></li>
                        <li><a href="/commissions">Commissions</a></li>
                        <li><a href="mailto:hello@rachelhawkescameron.com">Contact</a></li>
                        <li><a href="https://www.etsy.com/ca/shop/rachelhawkescameron" target="_blank" rel="noopener noreferrer">Etsy</a></li>
                        <li><a href="https://www.instagram.com/rachelhawkescameronart/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </nav>

            </header>
        )
    }
}

export default Header
