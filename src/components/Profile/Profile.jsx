import React from "react";
// import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { updateNewPostContent } from "../../redux/state";



const Profile = (props) => {

  return (
    <div>
        <ProfileInfo  />
        <MyPosts 
            posts={props.profilePage.posts}
            newPostContent={props.profilePage.newPostContent}
            updateNewPostContent={updateNewPostContent}
            addPost={props.addPost}
            />
    </div>
  )
}

export default Profile;