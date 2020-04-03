import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_023.jpg' width='1200'></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src='https://cutecatshq.com/wp-content/uploads/2017/03/citty-puss.jpg' width='200px'></img>About Me Descriptions
      </div>
    </div >
  )
};

export default ProfileInfo;