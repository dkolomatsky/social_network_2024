import React from "react";
import css from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div className={css.profileBlock}>
        <div className={css.imageContainer}>
          <img className={css.profileImage}
            src="https://edwardlowe.org/wp-content/uploads/revslider/mountainpng-1.png"
            alt="logo"
          ></img>
        </div>
        <div>Ava + Description</div>
    </div>
  )
}

export default ProfileInfo;