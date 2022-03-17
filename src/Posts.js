import React, { useState, useEffect } from 'react';
import { newPost } from './api';

//probably similar to login component

    const Posts = (props) => {
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [price, setPrice] = useState('')
        const [location, setLocation] = useState('')
        const [willDeliver, setWillDeliver] = useState(false)

    const createPost = async (event) => {
        event.preventDefault()
        try {
            const postSubmit = await newPost(title, description, price, location, willDeliver)
            
            if (postSubmit.success){
                let allPosts = props.posts
                allPosts.push(postSubmit.data.post)
                console.log("posts is ", allPosts)
                props.setPosts(allPosts)
            }
            
            if (!location){setLocation("[On request]")}
        } catch {console.error("Something's wrong with the new post!")}   
    }

    return (
        <div style= {{ display: 'flex', flexDirection: 'column', width: '250px'}}>
            <form>
                <h2>Add New Post</h2>

                <label>Title</label>
                <input type='text'
                name='title'
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                ></input>

                <label>Description</label>
                <input type='text'
                required
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                ></input>

                <label>Price</label>
                <input type='text'
                required
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                ></input>

                <label>Location</label>
                <input type='text'
                required
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                ></input>
            
                <input type='checkbox'               
                value={willDeliver}
                onChange={() => willDeliver ? setWillDeliver(false) : setWillDeliver(true)}
                ></input>
                <p>Willing to Deliver?</p>

                <button type='submit'
                onClick={createPost}
                >Submit</button>
            </form>
        </div>
    )
}
        

export default Posts;