// Dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

export default function BlogPost(props) {
    const [post, setPost] = useState({});

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

    const Post = styled.div`
        color: red;

        ${props =>
            props.summary &&
            css`
                color: blue;
                p {
                    display: none;
                }
        `}
    `;

    return (
        <Post summary={props.summary}>
            <img src={post.thumbnail} alt={post.title} />
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
            <h3>{post.topic}</h3>
            <p>{post.content}</p>
        </Post>
    );
}