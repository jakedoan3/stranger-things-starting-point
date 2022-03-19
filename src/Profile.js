import React, { useEffect, useState } from 'react';
import { getMe } from "./api";

const Profile = (props) => {

    const [myPosts, setMyPosts] = useState([]);
    const [myMessagesSent, setMyMessagesSent] = useState([])
    const [myMessagesReceived, setMyMessagesReceived] = useState([])

    useEffect(async () => {
        const { data, error } = await getMe();
        const { posts, messages, username } = data;
        console.log(data)
        setMyPosts(posts);
        const receivedMessages = messages.filter((message)=>message.fromUser.username!==username)
        setMyMessagesReceived(receivedMessages)
        const sentMessages = messages.filter((message)=>message.fromUser.username===username)
        setMyMessagesSent(sentMessages)
        if (error) {
          console.error(error);
        }
      }, []);

    
    //   console.log(posts);

    

    //   const filterInboxPosts = async () => {
         
    //   }


    //   const filterSentMessages = async () =>{
    //       //filter all posts and return the ones we sent messages for
    //   }

    return(
        <div>
            <h3>Inbox</h3>
            {/* Posts I made that received messages, display all messages on posts where I am the author */}
            {/* if isAuthor is true, display the messages */}
            {myMessagesReceived.map((myMessage) => (
                    <div key={myMessage._id}>  
                        <h2>{myMessage.post.title}</h2>
                        <p>{myMessage.fromUser.username}</p>
                        <p>{myMessage.content}</p>
                    </div>)
                )}
            

            <h3>Sent</h3>
                {myMessagesSent.map((myMessage) => (
                    <div key={myMessage._id}>  
                        <h2>{myMessage.post.title}</h2>
                        <p>{myMessage.fromUser.username}</p>
                        <p>{myMessage.content}</p>
                    </div>)
                )}
            {/* Posts other people made that I messaged about */}
            {/* loop over posts, look at messages arr, check if fromUser._id is the same as logged in user
            if same, display content of message i sent */}
            {/* OPTIONAL if messages.fromUser._id === same as logged in user
            if same, display posts, description, messages, etc*/}

            {/* 
            {posts.message.map(post =>
                <div key={post._id}>                  
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    <p>{post.location}</p>
                    <p>{post.author.username}</p>
                    {post.isAuthor ? <><button>Delete</button> <button>Edit</button> </>: props.isLoggedIn ? <button>Send Message</button> : null}
                </div>
            )} */}
        </div>
    )
}



export default Profile;