import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    // arrays of Posts Data
    { id: 1, message: "Hi. How are you?", likes: 13 },
    { id: 2, message: "Its my first post!", likes: 17 },
    { id: 3, message: "I love React!", likes: 22 },
  ],
  /* Профиль пока не проинициилизирован null */
  profile: null,
  status: "What's happen with you?",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 14,
        message: action.newPostText,
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

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
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

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

// получить статус
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

// обновить статус
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

// загрузить фото
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

// обновить профиль
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  }
};

export default profileReducer;
