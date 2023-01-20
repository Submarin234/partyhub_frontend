import React from 'react'

const Header: React.FC = () => {
    return (
        <header className='headerr'>
            <br/>
            <nav className="navMenu">
                <a href="/home">Home</a>
                <a href="/locations">Locations</a>
                <a href="/">Parties</a>
                <a href="/challenge">Challenges</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;
