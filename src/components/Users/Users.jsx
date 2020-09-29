/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from "react";

let Users = (props) => {
  props.setUsers([
    {
      id: 1,
      photoUrl: "../Media/icon-avatar.jpg",
      followed: true,
      fullName: "Bator",
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
      fullName: "Andrew",
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
      fullName: "Boris",
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
      fullName: "Donald",
      status:
        "Wise men speak because they have something to say; fools because they have to say something.",
      location: {
        country: "Italy",
        city: "Milan",
      },
    },
  ]);

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img alt="userpic" src={u.photoUrl} />
            </div>
            <div>
              <button>Follow</button>
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

export default Users;
