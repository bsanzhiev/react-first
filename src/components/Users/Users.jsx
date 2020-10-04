/* eslint-disable no-debugger */
import React from "react";
import PropTypes from "prop-types";
import styles from "./users.module.css";

let Users = (props) => {
  if(props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://s.dou.ua/storage-files/920_keROhy0.jpg",
        followed: true,
        fullName: "Andrew",
        status: "I love React",
        location: {
          country: "England",
          city: "London",
        },
      },
      {
        id: 2,
        photoUrl: "",
        followed: true,
        fullName: "Boris",
        status: "Bekind, for everyone you meet is fighting a harder battle.",
        location: {
          country: "Belgium",
          city: "Brussels",
        },
      },
      {
        id: 3,
        photoUrl: "",
        followed: false,
        fullName: "Viktor",
        status:
          "Every heart sings a song, incomplete, until another heart whispers back.",
        location: {
          country: "Germany",
          city: "Berlin",
        },
      },
      {
        id: 4,
        photoUrl: "",
        followed: false,
        fullName: "Gennady",
        status:
          "Wise men speak because they have something to say; fools because they have to say something.",
        location: {
          country: "Italy",
          city: "Milan",
        },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                alt="userpic"
                src={u.photoUrl}
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
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </div>
              <div></div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
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
