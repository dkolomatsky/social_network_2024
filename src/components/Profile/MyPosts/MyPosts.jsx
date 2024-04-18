import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";
// import { addPostActionCreator, updateNewPostContentActionCreator } from "../../../redux/profile-reducer";


const MyPosts = (props) => {
const postElements = props.posts.map((p) => <Post key={p.id} id={p.id} message={p.post} count={p.count}/>)
let newPostText = props.newPostContent;

const onAddPost = () => {props.addPost()};
const onPostChange = (e) => {
   let text = e.target.value;
   props.updateNewPostContent(text)
  };

  return (
    <div className={css.postsBlock}>
          My Post
          <div className={css.createPostField}>
            <div><textarea onChange={onPostChange} value={newPostText} /></div>
            <div><button onClick={onAddPost}>Add post</button></div>
          </div>
          <div className={css}>
            New post:
           {postElements}
          </div>
        </div>
  )
}

export default MyPosts;