import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://melmagazine.com/wp-content/uploads/2019/01/vapormall-1280x533.jpg'></img>
      </div>
      <div>
        <img src='https://cutecatshq.com/wp-content/uploads/2017/03/citty-puss.jpg' width='200px'></img>
      </div>
      <MyPosts />
    </div>
  )
};

export default Profile;