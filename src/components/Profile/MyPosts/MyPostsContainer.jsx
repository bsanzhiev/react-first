/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } 
  from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

  //let state = props.store.getState();

  //let clickAddPost = () => {
  //  props.store.dispatch(addPostActionCreator());
  //};

  //let onPostChange = (text) => {
  //  let action = updateNewPostTextActionCreator(text);
  //  props.store.dispatch(action);
  //};

  return (
    <StoreContext.Consumer> { 
      (store) => {
        let state = props.store.getState();

        let clickAddPost = () => {
            props.store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          props.store.dispatch(action);
        };

        return <MyPosts updateNewPostText={onPostChange} 
          addPost={clickAddPost} 
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText} 
        />
      }
    }
    </StoreContext.Consumer>
  )
};

export default MyPostsContainer;