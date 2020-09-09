/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

//const MyPostsContainer = (props) => {
//
//  //let state = props.store.getState();
//
//  //let clickAddPost = () => {
//  //  props.store.dispatch(addPostActionCreator());
//  //};
//
//  //let onPostChange = (text) => {
//  //  let action = updateNewPostTextActionCreator(text);
//  //  props.store.dispatch(action);
//  //};
//
//  return (
//    <StoreContext.Consumer> 
//      { (store) => {
//        let state = store.getState();
//
//        let clickAddPost = () => {
//            store.dispatch(addPostActionCreator());
//        };
//
//        let onPostChange = (text) => {
//          let action = updateNewPostTextActionCreator(text);
//          store.dispatch(action);
//        };
//
//        return <MyPosts updateNewPostText={onPostChange} 
//          addPost={clickAddPost} 
//          posts={state.profilePage.posts}
//          newPostText={state.profilePage.newPostText} />}}
//    </StoreContext.Consumer>
//  )
//};

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;