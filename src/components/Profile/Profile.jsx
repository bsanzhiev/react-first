/* eslint-disable no-unused-vars */
import React from 'react';
//import PropTypes from 'prop-types';
//import s from './Profile.module.css';
//import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer 
      //store={ props.store }
      />
    </div>
  )
};

export default Profile;