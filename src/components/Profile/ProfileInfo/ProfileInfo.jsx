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

  const onUserPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

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
        <div className={s.choosePhoto}>
          {props.isOwner && (
            <input type="file" onChange={onUserPhotoSelected} />
          )}
        </div>

        <ProfileData profile={props.profile} />

        <div>
          <b>Contacts: </b>
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contacts
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          })}
        </div>

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

const ProfileData = ({ profile }) => {
  return (
    <div>
      <div>
        <b>Full name: </b>
        {profile.fullName}
      </div>

      <div>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>

      {profile.lookingForAJob && (
        <div>
          <b>My skills: </b>
          {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>About me:</b>
        {profile.aboutMe}
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contacts}>
      <b>{contactTitle}:</b> {contactValue}
    </div>
  );
};

ProfileData.propTypes = {
  profile: PropTypes.object,
};

Contacts.propTypes = {
  contactTitle: PropTypes.object,
  contactValue: PropTypes.object,
};

ProfileInfo.propTypes = {
  savePhoto: PropTypes.object,
  isOwner: PropTypes.bool,
  profile: PropTypes.object,
  status: PropTypes.string,
  updateStatus: PropTypes.object,
};

export default ProfileInfo;
