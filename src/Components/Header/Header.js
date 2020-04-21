// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './Header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            exact to='/'
                            className='nav-link'
                            activeClassName='active-nav-link'
                            >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to='/blog'
                            className='nav-link'
                            activeClassName='active-nav-link'
                            >Blog</NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to='/contact'
                            className='nav-link'
                            activeClassName='active-nav-link'
                            >Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <h1>Jeff Zivkovic</h1>
        </header>
    );
}