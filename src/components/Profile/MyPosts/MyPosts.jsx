import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

const postElements = props.posts.map((p) => <Post message={p.post} count={p.count}/>
)
let newPostElements = React.createRef();

const addPost = () => {
  let text = newPostElements.current.value;
      props.addPost(text);
      newPostElements.current.value = '';
}
const onPostChange = () => {

   let text = newPostElements.current.value;
   props.updateNewPostContent(text);
   
}

  return (
    <div className={css.postsBlock}>
          My Post
          <div className={css.createPostField}>
            <div><textarea onChange={onPostChange} ref={newPostElements} value={props.newPostContent}  /></div>
            <div><button onClick={addPost}>Add post</button></div>
          </div>
          <div className={css}>
            New post:
           {postElements}
          </div>
        </div>
  )
}

export default MyPosts;