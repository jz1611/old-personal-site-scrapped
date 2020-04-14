// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './Header.css';

export default function Header() {
    return (
        <div className="top-bar-container">
            <header>
                <div>
                    <img src="sprite.png" alt="sprite" />
                    <h1>Jeff Zivkovic</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                exact to='/'
                                className='nav-link'
                                >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact to='/blog'
                                className='nav-link'
                                >Blog</NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact to='/contact'
                                className='nav-link'
                                >Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}