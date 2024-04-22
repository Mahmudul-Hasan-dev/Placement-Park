import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h2>PlacementPark</h2>
            <Nav></Nav>
            <button>Star Applying</button>
        </nav>
    );
};

export default Header;