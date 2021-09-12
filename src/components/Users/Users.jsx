import React from "react";
import PropTypes from "prop-types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <div>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={props.followingInProgress}
            followThC={props.followThC}
            unfollowThC={props.unfollowThC}
          />
        ))}
      </div>
      <div>
        <Paginator
          currentPage={currentPage}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
          onPageChanged={onPageChanged}
        />
      </div>
    </div>
  );
};

Users.propTypes = {
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.object,
  users: PropTypes.number,
  toggleFollowingProgress: PropTypes.bool,
  followingInProgress: PropTypes.bool,
  followThC: PropTypes.object,
  unfollowThC: PropTypes.func,
};
// https://ru.reactjs.org/docs/typechecking-with-proptypes.html

export default Users;
