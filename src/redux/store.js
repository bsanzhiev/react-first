import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
  _state: {
    profilePage: {
      profile: [],
      posts: [
        // arrays of Posts Data
        { id: 1, message: "Hi. How are you?", likes: 13 },
        { id: 2, message: "Its my first post!", likes: 17 },
        { id: 3, message: "I like vaporwave", likes: 22 },
      ],
      newPostText: "newText",
    },

    dialogsPage: {
      dialogs: [
        //Array of dialogs data
        { id: 1, name: "Bator" },
        { id: 2, name: "Irina" },
        { id: 3, name: "Viktor" },
        { id: 4, name: "Jason" },
        { id: 5, name: "Abraham" },
      ],
      messages: [
        //Array of messages data
        { id: 1, message: "Hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "Wasap! How your current React progress?" },
        { id: 4, message: "Mid. Im beginner student!" },
      ],
      newMessageBody: "",
    },

    sidebar: {},
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
