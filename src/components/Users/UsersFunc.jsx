/* eslint-disable no-debugger */
import React from "react";
import PropTypes from "prop-types";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from '../../media/userPhoto.png';

let Users = (props) => {
  if(props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    props.setUsers(response.data.items);
    });
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                alt="userpic"
                src={u.photos.small != null ? u.photos.small: userPhoto}
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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
//попытка прописать типы пропсов
Users.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Users;
