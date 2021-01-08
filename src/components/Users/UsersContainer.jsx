import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
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
  };
};

// eslint-disable-next-line no-unused-vars
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollow(userId));
    },

    setUsers: (users) => {
      dispatch(setUsers(users));
    },

    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPage(pageNumber));
    },

    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCount(totalCount));
    },

    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    },
  };
};

UsersContainer.propTypes = {
  setUsers: PropTypes.number,
  setTotalUsersCount: PropTypes.number,
  setCurrentPage: PropTypes.number,
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.object,
  users: PropTypes.object,
  follow: PropTypes.bool,
  unfollow: PropTypes.bool,
  isFetching: PropTypes.bool,
  toggleIsFetching: PropTypes.bool,
};

// follow, unfollow - action creators
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
