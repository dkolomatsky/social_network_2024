import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {id: 1, post: "Hello, how are you?", count: 3},
    {id: 2, post: "It's my first post.", count: 10},
  ];
  return (
    <div className={css.postsBlock}>
          My Post
          <div className={css.createPostField}>
            <div><textarea></textarea></div>
            <div><button>Add post</button></div>
          </div>
          <div className={css}>
            New post:
          <Post message={postsData[0].post} count={postsData[0].count}/>
          <Post message={postsData[1].post} count={postsData[1].count}/>
          </div>
        </div>
  )
}

export default MyPosts;