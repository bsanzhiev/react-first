import React from "react";
import PropTypes from "prop-types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};

export default Profile;
