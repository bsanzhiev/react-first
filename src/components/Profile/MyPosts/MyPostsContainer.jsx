/* eslint-disable react/prop-types */

import React from 'react';
//import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } 
  from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let postsElements = props.posts.map (
    p => {
      return <Post message={p.message} key={p.id} likes={p.likes} />;
    }
  );

  let newPostElement = React.createRef();

  let clickAddPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (<MyPosts 
    updateNewPostTextActionCreator = {onPostChange} 
    clickAddPost ={clickAddPost}/>)
};

export default MyPostsContainer;