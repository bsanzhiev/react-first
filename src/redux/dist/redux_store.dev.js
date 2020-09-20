"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _profile_reducer = _interopRequireDefault(require("./profile_reducer"));

var _dialogs_reducer = _interopRequireDefault(require("./dialogs_reducer"));

var _sidebar_reducer = _interopRequireDefault(require("./sidebar_reducer"));

var _users_reduser = _interopRequireDefault(require("./users_reduser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require("redux"),
    createStore = _require.createStore,
    combineReducers = _require.combineReducers; // воспринимаем это как стейт


var redusers = combineReducers({
  profilePage: _profile_reducer["default"],
  dialogsPage: _dialogs_reducer["default"],
  sidebar: _sidebar_reducer["default"],
  usersPage: _users_reduser["default"]
});
var store = createStore(redusers);
window.store = store;
var _default = store;
exports["default"] = _default;