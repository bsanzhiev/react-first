import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile_reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps)(WithURLDataContainerComponent);

ProfileContainer.propTypes = {
  setUserProfile: PropTypes.object,
  match: PropTypes.object,
  profile: PropTypes.object,
  getUserProfile: PropTypes.object,
};
