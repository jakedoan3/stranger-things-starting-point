import React, { useState, useEffect } from 'react';
import { getPosts } from './api';

const PostList = (props) => {
    const { posts, setPosts } = props

    useEffect(async () => {
        const {data, error} = await getPosts();
        const { posts } = data
        setPosts(posts);
        if (error) {console.error(error)}
    }, [posts]);

    

    return (
        <div>
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    <p>{post.location}</p>
                    <p>{post.author.username}</p>
                </div>
            )}
        </div>
    );
};

export default PostList;