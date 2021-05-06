import React from "react";
import s from "./Post.module.css";
import PropTypes from "prop-types";
import userPhoto from "../../../../media/userPhoto.png";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt="avatar" src={userPhoto}></img>
      {props.message}
      <div>
        <span>Like </span> {props.likes}
      </div>
    </div>
  );
};

Post.propTypes = {
  message: PropTypes.string,
  likes: PropTypes.number,
};

export default Post;
