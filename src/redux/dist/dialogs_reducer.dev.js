"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateNewMessageBodyCreator = exports.sendMessageCreator = exports.profileReducer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
var SEND_MESSAGE = 'SEND-MESSAGE';
var initialState = {
  dialogs: [//Array of dialogs data
  {
    id: 1,
    name: 'Bator'
  }, {
    id: 2,
    name: 'Irina'
  }, {
    id: 3,
    name: 'Viktor'
  }, {
    id: 4,
    name: 'Jason'
  }, {
    id: 5,
    name: 'Abraham'
  }],
  messages: [//Array of messages data
  {
    id: 1,
    message: 'Hi'
  }, {
    id: 2,
    message: 'Yo'
  }, {
    id: 3,
    message: 'Wasap! How your current React progress?'
  }, {
    id: 4,
    message: 'Very low. Im just started learning)))'
  }],
  newMessageBody: ''
};

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var stateCopy = _objectSpread({}, state); //stateCopy.messages = [...state.messages];


  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      {
        stateCopy.newMessageBody = action.body;
        return stateCopy;
      }

    case SEND_MESSAGE:
      {
        var body = stateCopy.newMessageBody;
        stateCopy.newMessageBody = '';
        stateCopy.messages.push({
          id: 5,
          message: body
        });
        return stateCopy;
      }

    default:
      return state;
  }
};

exports.profileReducer = profileReducer;

var sendMessageCreator = function sendMessageCreator() {
  return {
    type: SEND_MESSAGE
  };
};

exports.sendMessageCreator = sendMessageCreator;

var updateNewMessageBodyCreator = function updateNewMessageBodyCreator(body) {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};

exports.updateNewMessageBodyCreator = updateNewMessageBodyCreator;
var _default = profileReducer;
exports["default"] = _default;