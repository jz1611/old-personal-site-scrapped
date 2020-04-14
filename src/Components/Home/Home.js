// Dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
// CSS
import './Home.css';

// Declare Home as function comonent
export default function Home() {
    // Pause variable used to prevent useEffect infinite looping
    const pause = 0;
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        // Get most recent post from API and set the state
        axios
            .get('/api/blog/recent')
            .then(res => {
                setRecentPosts(res.data);
            });
    }, [pause]);

    const mappedPosts = recentPosts.map(post => {
        // Format date from API so it is more user friendly
        var date = new Date(post.date);
        date = moment(date).format('dddd MMMM D Y');

        return (
            <div key={post.id} className="post-summary">
                <h3>{post.title}</h3>
                <h4>{date}</h4>
                <h4>{post.topic}</h4>
            </div>
        )
    })

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
                    <p>
                        Please check out some of my projects below, and don't be afraid
                        to reach out!
                    </p>
                </section>
                <section>
                    <h2>Skills</h2>
                    <p>
                        Coming soon...
                    </p>
                </section>
                <section>
                    <h2>Projects</h2>
                    <p>
                        Coming soon...
                    </p>
                </section>
            </div>
            <aside>
                <h2>Recent Posts</h2>
                {mappedPosts}
            </aside>
        </div>
    );
}