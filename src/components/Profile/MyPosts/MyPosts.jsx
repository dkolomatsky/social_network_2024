import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostContentActionCreator } from "../../../redux/state";


const MyPosts = (props) => {

const postElements = props.posts.map((p) => <Post message={p.post} count={p.count}/>
)
let newPostElements = React.createRef();

const addPost = () => {
  // ⛳ - ВАЖНО указываем какой тип action мы вызываем у метода dispatch (типы action мы создадим с помощью фунцкии что то типа actionCreator а тут ее просто вызовем )
      props.dispatch(addPostActionCreator());
}
const onPostChange = () => {
   let text = newPostElements.current.value;
   // ⛳ - ВАЖНО указываем какой тип action мы вызываем у метода dispatch и если надо еще какие-то свойства вызвать то указываем их
   props.dispatch(updateNewPostContentActionCreator(text));
   
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