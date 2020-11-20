import React from 'react';
import s from './ProfileInfo.module.css';
import PropTypes from "prop-types";
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img alt='cover' src='https://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_023.jpg' width='1200'></img>
      </div>
      <div className={s.descriptionBlock}>
        <img alt='avatar' src={props.profile.photos.small} ></img>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.twitter}</div>
        <div>{props.profile.lookingForAJob}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div >
  )
};

ProfileInfo.propTypes = {
  profile: PropTypes.number
};
export default ProfileInfo;