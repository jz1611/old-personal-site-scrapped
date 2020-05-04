// Dependencies
import React from 'react';

// CSS
import './Footer.css';

const linkedin = require('./linkedin.png');
const github = require('./GitHub-Mark-Light-64px.png');

export default function Footer() {
    return (
        <footer id="page-footer">
            <div id="social-container">
                <a href="https://www.linkedin.com/in/jeff-zivkovic-34082210b/" target="_blank" rel='noreferrer noopener'>
                    <img id="linkedin" src={linkedin} alt="linkedin logo" />
                </a>
                <a href="https://github.com/jz1611" target="_blank" rel='noreferrer noopener'>
                    <img id="github" src={github} alt="github logo" />
                </a>
            </div>
        </footer>
    );
}