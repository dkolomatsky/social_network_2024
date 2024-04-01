import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={css}>
          My Post
          <div className={css}>
            New post
          <Post />
          <Post />
          </div>
        </div>
  )
}

export default MyPosts;