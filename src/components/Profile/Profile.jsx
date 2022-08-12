import React from "react";
import PropTypes from "prop-types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        isOwner={props.isOwner}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

Profile.propTypes = {
  isOwner: PropTypes.bool,
  profile: PropTypes.object,
  status: PropTypes.string,
  updateStatus: PropTypes.object,
  savePhoto: PropTypes.object,
  saveProfile: PropTypes.object,
};

export default Profile;
