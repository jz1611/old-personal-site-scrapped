// Dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function BlogPost(props) {
    const [post, setPost] = useState({});
    const [redirect, setRedirect] = useState(false)

    // If component is being access from URL, use that parameter, if
    // rendered in another component, use passed in ID
    let id;
    props.match ?
    { id } = props.match.params :
    id = props.id;

    useEffect(() => {
        axios
            .get(`/api/blog/post/${id}`)
            .then(res => {
                setPost(res.data);
            })
    }, [id]);

    const clickHandler = () => {
        setRedirect(true);
    }

    return (
        post.exists === false
        ?
        <div style={{display: 'none'}}>No Posts</div>
        :
        redirect === false
        ?
        <div onClick={clickHandler}>
            <img src={post.thumbnail} alt={post.title} />
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
            <h3>{post.topic}</h3>
            <p>{post.content}</p>
        </div>
        :
        <Redirect to={`/blog/${post.id}`} />
    );
}