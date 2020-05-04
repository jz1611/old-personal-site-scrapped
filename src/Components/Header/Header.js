// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './Header.css';

export default function Header() {
    return (
        <header id="page-header">
            <nav id="header-nav">
                <ul id="link-list">
                    <li className="link-container">
                        <NavLink
                            className="link"
                            activeClassName="link-active"
                            exact to='/'
                            >Home</NavLink>
                    </li>
                    <li className="link-container">
                        <NavLink
                            className="link"
                            activeClassName="link-active"
                            exact to='/blog'
                            >Blog</NavLink>
                    </li>
                    <li className="link-container">
                        <NavLink
                            className="link"
                            activeClassName="link-active"
                            exact to='/contact'
                            >Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <h1 id="name">Jeff Zivkovic</h1>
        </header>
    );
}