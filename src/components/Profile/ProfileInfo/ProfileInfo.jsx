import React from "react";
import s from "./ProfileInfo.module.css";
import PropTypes from "prop-types";
import Preloader from "../../common/Preloader/Preloader";
import cover from "../../../media/cover.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  /* TypeError: Cannot read property 'photos' of null - 59 урок
   Сюда не приходят пропсы*/
  return (
    <div>
      <div>
        <img alt="cover" src={cover} width="1200"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img alt="avatar" src={props.profile.photos.small}></img>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.twitter}</div>
        <div>{props.profile.lookingForAJob}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  profile: PropTypes.number,
};
export default ProfileInfo;
