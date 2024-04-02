import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={css}>
          My Post
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div className={css}>
            New post:
          <Post message="Hello, how are you?" count='3'/>
          <Post message="It's my first post." count='5'/>
          </div>
        </div>
  )
}

export default MyPosts;