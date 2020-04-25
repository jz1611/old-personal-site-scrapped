// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            exact to='/'
                            >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to='/blog'
                            >Blog</NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to='/contact'
                            >Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <h1>Jeff Zivkovic</h1>
        </header>
    );
}