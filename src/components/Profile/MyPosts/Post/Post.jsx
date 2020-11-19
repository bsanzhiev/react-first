import React from 'react';
import s from './Post.module.css';
import PropTypes from 'prop-types';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt='avatar' src='https://c7.hotpng.com/preview/348/800/890/computer-icons-avatar-user-login-avatar-thumbnail.jpg'></img>
        { props.message }
      <div>
        <span>Like </span> {props.likes}
      </div>
    </div>
  )
}

Post.propTypes = {
  message: PropTypes.string,
  likes: PropTypes.number
};

export default Post;