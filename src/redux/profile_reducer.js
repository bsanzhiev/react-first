import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  posts: [
    // arrays of Posts Data
    { id: 1, message: "Hi. How are you?", likes: 13 },
    { id: 2, message: "Its my first post!", likes: 17 },
    { id: 3, message: "I love Irina!", likes: 22 },
  ],
  newPostText: "newText",
  /* Профиль пока не проинициилизирован null */
  profile: null,
  status: "What's happen with you?",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 14,
        message: state.newPostText,
        likes: 15,
      };
      let stateCopy = {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      /* Возвращается стейт, в котором изменен profile
      на пришедший из экшена */
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        // придет новый статус сервера
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

/* Это экшен криейтор - возвращает объект экшен.
Экшен содержит название экшена и объект profile,
который нужно поместить в стейт */
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

// получить статус
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

// обновить статус
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
