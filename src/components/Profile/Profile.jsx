/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
//import PropTypes from 'prop-types';
//import s from './Profile.module.css';
//import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
