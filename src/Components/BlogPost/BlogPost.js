// Dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BlogPost(props){
    const [post, setPost] = useState({});
    const { id } = props.match.params;
    

    useEffect(() => {
        axios
            .get(`/api/blog/post/${id}`)
            .then(res => {
                setPost(res.data);
            })
    }, [id])

    return (
        <div>
            <img src={post.thumbnail} alt={post.title} />
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
            <h3>{post.topic}</h3>
            <p>{post.content}</p>
        </div>
    );
}