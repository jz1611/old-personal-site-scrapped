// Dependencies
import React from 'react';

const linkedin = require('./linkedin.svg');
const github = require('./GitHub_Logo_White.png');

export default function Footer() {
    return (
        <footer>
            <div>
                <a href="https://www.linkedin.com/in/jeff-zivkovic-34082210b/" target="_blank" rel='noreferrer noopener'>
                    <img src={linkedin} alt="linkedin logo" />
                </a>
                <a href="https://github.com/jz1611" target="_blank" rel='noreferrer noopener'>
                    <img src={github} alt="github logo" />
                </a>
            </div>
            <h6>Website created and maintained by Jeff Zivkovic</h6>
        </footer>
    );
}