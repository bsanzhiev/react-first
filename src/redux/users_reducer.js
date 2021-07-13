import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

// Initial state
let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  page: 1,
  isFetching: true,
  followingInProgress: [],
};

// Users reduser
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
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
};

// action creators
export const followAC = (userId) => ({ type: FOLLOW, userId });

// action creator
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

// action creator
export const setUsersAC = (users) => ({ type: SET_USERS, users });

// action creator
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

// action creator
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

// action creator
export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

// action creator
export const toggleFollowingProgressAC = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

// thunk creator
export const getUsersThC = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true));

    //не подсвечивется текущая страница
    dispatch(setCurrentPageAC(page));

    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersCountAC(data.totalCount));
    });
  };
};

// thunk creator for follow user
export const followThC = (userId) => {
  return (dispatch) => {
    //disabled={followingInProgress.some(id => id === u.id)};
    dispatch(toggleFollowingProgressAC(true, userId));
    usersAPI.followUsers(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(followAC(userId));
      }
      dispatch(toggleFollowingProgressAC(false, userId));
    });
  };
};

// thunk creator for unfollow user
export const unfollowThC = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userId));
    usersAPI.unfollowUsers(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(unfollowAC(userId));
      }
      dispatch(toggleFollowingProgressAC(false, userId));
    });
  };
};

export default usersReducer;
