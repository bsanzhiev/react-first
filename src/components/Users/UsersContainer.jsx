import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import {
  setCurrentPageAC,
  toggleFollowingProgressAC,
  followThC,
  unfollowThC,
  requestUsers,
} from "../../redux/users_reducer";

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
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    setCurrentPageAC,
    toggleFollowingProgressAC,
    requestUsers,
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
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.func,
  users: PropTypes.object,
  followAC: PropTypes.func,
  unfollowAC: PropTypes.func,
  isFetching: PropTypes.bool,
  toggleIsFetching: PropTypes.bool,
  toggleFollowingProgressAC: PropTypes.array,
  followingInProgress: PropTypes.array,
  requestUsers: PropTypes.object,
  getUsers: PropTypes.func,
  followThC: PropTypes.func,
  unfollowThC: PropTypes.func,
};
