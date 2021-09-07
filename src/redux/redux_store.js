import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app_reducer";

// eslint-disable-next-line no-undef
//const { createStore, combineReducers, applyMiddleware } = require("redux");

// воспринимаем это как стейт
let reduсers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reduсers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

//let store = createStore(reduсers, applyMiddleware(thunkMiddleware));

window.__store__ = store;
export default store;
