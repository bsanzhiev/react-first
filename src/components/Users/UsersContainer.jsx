// eslint-disable-next-line no-unused-vars
import React from 'react';
import { followAC, setUsersAC, unfollowAC } from "../../redux/users_reducer";
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
