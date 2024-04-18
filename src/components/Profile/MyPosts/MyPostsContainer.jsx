import React from "react";
import { addPostActionCreator, updateNewPostContentActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// ⛳ !!!!! - это контейнерная компонента для компоненты MyPost. Ее задача получать от store данные и отдавать в MyPost только то что ему нужно и чтобы MyPost никак не знал о данных из store
//_____________________________________________________________________________________________________//
// const MyPostsContainer = (props) => {

// let state = props.store.getState();

// const addPost = () => {
//   // ⛳ - ВАЖНО указываем какой тип action мы вызываем у метода dispatch (типы action мы создадим с помощью фунцкии что то типа actionCreator а тут ее просто вызовем )
//       props.store.dispatch(addPostActionCreator());
// }
// const onPostChange = (text) => {
//    // ⛳ - ВАЖНО указываем какой тип action мы вызываем у метода dispatch и если надо еще какие-то свойства вызвать то указываем их
//    props.store.dispatch(updateNewPostContentActionCreator(text));
   
// }
//   return (
//     <MyPosts updateNewPostContent={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostContent={state.profilePage.newPostContent} />
//   )
// }
let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostContent: state.profilePage.newPostContent
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostContent: (text) => {
      dispatch(updateNewPostContentActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts);

export default MyPostsContainer;