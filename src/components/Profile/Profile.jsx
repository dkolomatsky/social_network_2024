import React from "react";
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={css.content}>
        <div>
          <img
            src="https://edwardlowe.org/wp-content/uploads/revslider/mountainpng-1.png"
            alt="logo"
          ></img>
        </div>
        <div>Ava + Description</div>
        <MyPosts />
    </div>
  )
}

export default Profile;