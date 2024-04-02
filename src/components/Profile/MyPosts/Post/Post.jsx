import React from "react";
import css from './Post.module.css';

const Post = (props) => {
  return(
    <div className={css.item}>
      <div className={css.newPost}>
       <img className={css.avatar} src="https://banner2.cleanpng.com/20180531/wxl/kisspng-avatar-computer-icons-logo-photographer-5b102d1e728c13.7251972015277867824692.jpg" alt="avatar">
       </img>
       {props.message}
      </div>
      <div>
        <img className={css.like} src="https://banner2.cleanpng.com/20180616/ccf/kisspng-thumb-signal-computer-icons-like-icon-5b24ba2679a3b8.7819004915291336064983.jpg" alt="like-img">
        </img> 
        {props.count}
      </div>
    </div>
  )
}

export default Post