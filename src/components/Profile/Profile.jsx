import React from "react";
import PropTypes from "prop-types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
  status: PropTypes.string,
  updateStatus: PropTypes.object,
};

export default Profile;
