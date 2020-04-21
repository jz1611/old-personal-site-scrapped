// Dependencies
import React from 'react';

// CSS
import './Footer.css';

const linkedin = require('./linkedin.svg')

export default function Footer() {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/jeff-zivkovic-34082210b/" target="_blank">
                <img id="linkedin" src={linkedin} alt="linkedin logo" />
            </a>
        </footer>
    );
}