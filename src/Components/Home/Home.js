// Dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import BlogPost from '../BlogPost/BlogPost';

// CSS
import './Home.css';

// Declare Home as functional component
export default function Home() {
    const amount = 3;
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/blog/recent/${amount}`)
            .then(res => {
                setRecent(res.data);
            });
    }, []);

    const mappedRecent = recent.map(post => {
        return (
            <BlogPost key={post.id} id={post.id} />
        );
    });

    return (
        <div id="home-container">
            <div id="home-main">
                <section className="home-section">
                    <h2 className="home-title">About Me</h2>
                    <p className="home-p">
                        My name is Jeff and I am a software developer searching
                        for my first role. I graduated from Ohio State University
                        with a B.S. in Electrical Engineering. I quickly realized
                        that my true calling was in the software field, and decided
                        to take a Web Development course through DevMountain in Phoenix.
                        I am open to many opportunities, and am eager to begin my career
                        in the field.
                    </p>
                    <p className="home-p">
                        Outside of software, my hobbies include hiking, camping,
                        skiing, snowboarding, video games, and playing with my dog.
                        I love learning new things and pushing my physical and intellectual
                        limits.
                    </p>
                    <p className="home-p">
                        Please check out some of my projects below, and don't be afraid
                        to reach out!
                    </p>
                </section>
                <section className="home-section">
                    <h2 className="home-title">Skills</h2>
                    <p className="home-p">
                        Coming soon...
                    </p>
                </section>
                <section className="home-section">
                    <h2 className="home-title">Projects</h2>
                    <p className="home-p">
                        Coming soon...
                    </p>
                </section>
            </div>
            <aside id="home-posts">
                <h2 className="home-title">Recent Posts</h2>
                {mappedRecent}
            </aside>
        </div>
    );
}