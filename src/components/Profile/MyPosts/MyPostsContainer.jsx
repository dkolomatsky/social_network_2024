import { addPostActionCreator, updateNewPostContentActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// ⛳ !!!!! - это контейнерная компонента для компоненты MyPost. Ее задача получать от store данные и отдавать в MyPost только то что ему нужно и чтобы MyPost никак не знал о данных из store
//_____________________________________________________________________________________________________//


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostContent: state.profilePage.newPostContent,
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostContentActionCreator(text))
    }
  }
}

// ⛳
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;