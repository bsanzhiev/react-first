const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: "../Media/icon-avatar.jpg",
      followed: true,
      fullName: "Cyrill",
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
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
