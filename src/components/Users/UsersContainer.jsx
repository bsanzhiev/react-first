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

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThC(this.props.currentPage, this.props.pageSize);
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
          currentPage={this.props.currentPage}
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  setCurrentPageAC,
  toggleFollowingProgressAC,
  getUsersThC,
  followThC,
  unfollowThC,
})(UsersContainer);

UsersContainer.propTypes = {
  setUsers: PropTypes.number,
  setTotalUsersCount: PropTypes.number,
  setCurrentPage: PropTypes.number,
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
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
