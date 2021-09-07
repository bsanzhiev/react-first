import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../media/userPhoto.png";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollowThC, followThC }) => {
  return (
    <div>
      <div>
        <span>
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img
                alt="userpic"
                src={user.photos.small != null ? user.photos.small : userPhoto}
                className={styles.userPhoto}
              />
            </NavLink>
          </div>
          <div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollowThC(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  followThC(user.id);
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
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div></div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
  followingInProgress: PropTypes.bool,
  unfollowThC: PropTypes.object,
  followThC: PropTypes.object,
};

export default User;
