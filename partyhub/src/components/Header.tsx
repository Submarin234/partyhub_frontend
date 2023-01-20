import React from 'react'

const Header: React.FC = () => {
    return (
        <header>
            <br/>
            <nav className="navMenu">
                <a href="/home">Home</a>
                <a href="/">Parties</a>
                <a href="/locations">Locations</a>
                <a href="/">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;
