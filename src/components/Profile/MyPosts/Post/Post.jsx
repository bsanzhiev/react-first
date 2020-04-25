import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://c7.hotpng.com/preview/348/800/890/computer-icons-avatar-user-login-avatar-thumbnail.jpg'></img>
        { props.message }
      <div>
        <span>Like 👍</span> {props.likes}
      </div>
    </div>
  )
};

export default Post;