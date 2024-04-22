import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied">Applied Job</Link>
            <Link to="/blog">Blog</Link>
        </div>
    );
};

export default Nav;