/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {

  //delete usless constructor 
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      users={this.props.users}
    />
  }
}

export default UsersAPIComponent;
