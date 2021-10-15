import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

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
  currentPage: 1,
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
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
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

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgressAC = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(page));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount));
  };
};

export const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgressAC(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgressAC(false, userId));
};

export const followThC = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.followUsers.bind(usersAPI),
      followAC
    );
  };
};

export const unfollowThC = (userId) => {
  return async (dispatch) => {
    //let apiMethod = usersAPI.unfollow.bind(usersAPI);
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollowUsers.bind(usersAPI),
      unfollowAC
    );
  };
};

export default usersReducer;
