import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  // action creators:
  setCurrentPageAC,
  toggleFollowingProgressAC,
  // thunk creators:
  followThC,
  unfollowThC,
  getUsersThC,
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users_selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThC(this.props.page, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThC(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          page={this.props.page}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgressAC={this.props.toggleFollowingProgressAC}
          followThC={this.props.followThC}
          unfollowThC={this.props.unfollowThC}
        />
      </>
    );
  }
}

/* let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
}; */

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

// export default connect(mapStateToProps, {
//   setCurrentPageAC,
//   toggleFollowingProgressAC,
//   getUsersThC,
//   followThC,
//   unfollowThC,
// })(UsersContainer);

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    setCurrentPageAC,
    toggleFollowingProgressAC,
    getUsersThC,
    followThC,
    unfollowThC,
  })
)(UsersContainer);

UsersContainer.propTypes = {
  setUsers: PropTypes.number,
  setTotalUsersCount: PropTypes.number,
  setCurrentPage: PropTypes.number,
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.number,
  page: PropTypes.number,
  onPageChanged: PropTypes.object,
  users: PropTypes.object,
  followAC: PropTypes.func,
  unfollowAC: PropTypes.func,
  isFetching: PropTypes.bool,
  toggleIsFetching: PropTypes.bool,
  toggleFollowingProgressAC: PropTypes.array,
  followingInProgress: PropTypes.array,
  getUsersThC: PropTypes.object,
  followThC: PropTypes.func,
  unfollowThC: PropTypes.func,
};
