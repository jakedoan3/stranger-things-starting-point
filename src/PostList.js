import React, { useState, useEffect } from 'react';
import { getPosts } from './api';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const {data, error} = await getPosts();
        console.log(data.posts, error)
        const { posts } = data
        setPosts(posts);
        if (error.length) {console.error(error)}
    }, []);

    return (
        <div>
            {posts.map(post =>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export default PostList;