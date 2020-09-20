import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reduser";

const { createStore, combineReducers } = require("redux");

// воспринимаем это как стейт
let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
});

let store = createStore(redusers);

window.store = store;

export default store;