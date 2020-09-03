/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let clickAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (<MyPosts 
    updateNewPostText={onPostChange} 
    addPost={clickAddPost} 
    posts={props.posts} />)
};

export default MyPostsContainer;