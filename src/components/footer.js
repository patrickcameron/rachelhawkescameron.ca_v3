import React from 'react'

const Footer = () => (
    <footer className="footer">
        <small>
            &copy; {( new Date().getFullYear() )} Rachel Hawkes Cameron. Website by <a href="https://patrickcameron.ca" target="_blank" rel="noopener noreferrer">Patrick Cameron</a>.
        </small>
    </footer>
)

export default Footer
