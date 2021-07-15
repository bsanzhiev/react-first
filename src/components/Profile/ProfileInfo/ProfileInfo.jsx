import React from "react";
import s from "./ProfileInfo.module.css";
import PropTypes from "prop-types";
import Preloader from "../../common/Preloader/Preloader";
// import cover from "../../../media/cover.jpg";
import userPhoto from "../../../media/userPhoto.png";
//import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  /* TypeError: Cannot read property 'photos' of null - 59 урок
   Сюда не приходят пропсы*/
  return (
    <div>
      {/* <div>
        <img alt="cover" src={cover} width="1200"></img>
      </div> */}
      <div className={s.descriptionBlock}>
        <img
          alt="avatar"
          src={props.profile.photos.small || userPhoto}
          className={s.userPhoto}
        ></img>
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
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
  status: PropTypes.string,
  updateStatus: PropTypes.object,
};

export default ProfileInfo;
