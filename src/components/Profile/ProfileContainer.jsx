import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
} from "../../redux/profile_reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
    }

    this.props.getUserProfile(userId);

    this.props.getStatus(userId);

    this.props.updateStatus(userId);
  }
  // Метод жизненного цикла
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  // для получения статуса из стейта
  status: state.profilePage.status,
  // получаем userId авторизованного пользователя
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

/* connect далее передает эти props в целевую компоненту - 
в данном случае это ProfileComponent 
mapStateToProps - мы берем из стейта необходимые компоненте данные 
Можно передавать в connect не весь mapDispatchToProps,
а только необходимую часть, в виде отдельного объекта.
58 урок
Объект getUserProfile содержит в себе экшенкриейторы*/

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

/* Код перенесен в withAuthRedirect
  HOC for redirect
  let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
  let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

  export default connect(mapStateToProps, { getUserProfile })(
    WithURLDataContainerComponent
  ); */

ProfileContainer.propTypes = {
  setUserProfile: PropTypes.object,
  match: PropTypes.object,
  profile: PropTypes.object,
  getUserProfile: PropTypes.object,
  getStatus: PropTypes.object,
  updateStatus: PropTypes.object,
  status: PropTypes.string,
  isAuth: PropTypes.bool,
  authorizedUserId: PropTypes.object,
  savePhoto: PropTypes.object,
};
