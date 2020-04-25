// Dependencies
import React from 'react';

// CSS
import './Home.css';

// Declare Home as functional component
export default function Home() {
    return (
        <div className="content-container">
            <div className="info">
                <section>
                    <h2>About Me</h2>
                    <p>
                        My name is Jeff and I am a software developer searching
                        for my first role. I graduated from Ohio State University
                        with a B.S. in Electrical Engineering. I quickly realized
                        that my true calling was in the software field, and decided
                        to take a Web Development course through DevMountain in Phoenix.
                        I am open to many opportunities, and am eager to begin my career
                        in the field.
                    </p>
                    <p>
                        Outside of software, my hobbies include hiking, camping,
                        skiing, snowboarding, video games, and playing with my dog.
                        I love learning new things and pushing my physical and intellectual
                        limits.
                    </p>
                    <p className="bottom-p">
                        Please check out some of my projects below, and don't be afraid
                        to reach out!
                    </p>
                </section>
                <section>
                    <h2>Skills</h2>
                    <p className="bottom-p">
                        Coming soon...
                    </p>
                </section>
                <section>
                    <h2>Projects</h2>
                    <p className="bottom-p">
                        Coming soon...
                    </p>
                </section>
            </div>
            <aside>
                <h2>Recent Posts</h2>
            </aside>
        </div>
    );
}