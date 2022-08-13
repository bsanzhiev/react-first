import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import PropTypes from "prop-types";
import Preloader from "../../common/Preloader/Preloader";
//import cover from "../../../media/cover.jpg";
import userPhoto from "../../../media/userPhoto.png";
//import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

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

  const onSubmit = (formData) => {
    //props.login(formData.email, formData.password, formData.rememberMe);
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
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

        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />

        {editMode ? (
          <ProfileDataFormReduxForm
            profile={props.profile}
            initialValues={props.profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={props.profile}
            isOwner={props.isOwner}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Full name: </b>
        {profile.fullName}
      </div>

      <div>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>

      <div>
        <b>My skills: </b>
        {profile.lookingForAJobDescription}
      </div>

      <div>
        <b>About me: </b>
        {profile.aboutMe}
      </div>

      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contacts}>
      <b>{contactTitle}:</b> {contactValue}
    </div>
  );
};

ProfileData.propTypes = {
  profile: PropTypes.object,
  isOwner: PropTypes.bool,
  goToEditMode: PropTypes.func,
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
  saveProfile: PropTypes.object,
};

export default ProfileInfo;
