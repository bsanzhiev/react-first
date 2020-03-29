import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://cdn.vox-cdn.com/thumbor/lCAHfXW-NhmS4tF2gBZmGuU2el4=/0x0:800x600/1200x800/filters:focal(266x304:394x432)/cdn.vox-cdn.com/uploads/chorus_image/image/55227337/Bliss.1497349801.png'></img>
      </div>
      <div>
        <img src='https://cutecatshq.com/wp-content/uploads/2017/03/citty-puss.jpg' width='200px'></img>
      </div>
      <MyPosts />
    </div>
  )
};

export default Profile;