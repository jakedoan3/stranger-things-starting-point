import React, { useEffect, useState } from "react";
import { getAuthPosts, handleDelete } from "./api";
import Message from "./Message";

const PostList = (props) => {
  const { posts, setPosts } = props;
  const [isShowMessage, setIsShowMessage] = useState(false);

  useEffect(async () => {
    const { data, error } = await getAuthPosts();
    const { posts } = data;
    
    setPosts(posts);
    if (error) {
      console.error(error);
    }
  }, []);

  

  const handleEdit = async (event) => {
    event.preventDefault();
    {
      /* enable user to edit on form with same fields as create post
    send ID of this post to API with edit request */
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.price}</p>
          <p>{post.location}</p>
          <p>{post.author.username}</p>
          {post.isAuthor ? (
            <>
              <button id="delete" onClick={() => handleDelete(post._id)}>
                Delete
              </button>

              <button id="edit" onClick={handleEdit}>
                Edit
              </button>
            </>
          ) : props.isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  setIsShowMessage(true);
                }}
              >
                Send Message{" "}
              </button>
              {isShowMessage ? <Message postId={post._id}/> : null}
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default PostList;
