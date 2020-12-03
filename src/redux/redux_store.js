import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";

// eslint-disable-next-line no-undef
const { createStore, combineReducers } = require("redux");

// воспринимаем это как стейт
let reduсers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reduсers);

window.store = store;

export default store;
