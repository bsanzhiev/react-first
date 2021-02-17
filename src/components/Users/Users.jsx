import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../media/userPhoto.png";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(p) => {
                props.onPageChanged(p);
              }}
              key={p.id}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  alt="userpic"
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowThC(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  //disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.followThC(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div></div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
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
