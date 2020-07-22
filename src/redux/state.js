const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {

  _state: {
    profilePage: {
      posts: [ // arrays of Posts Data
        { id: 1, message: 'Hi. How are you?', likes: 13 },
        { id: 2, message: 'Its my first post!', likes: 17 },
        { id: 3, message: 'I like vaporwave', likes: 22 }
      ],
      newPostText: 'newText'
    },

    dialogsPage: {
      dialogs: [ //Array of dialogs data
        { id: 1, name: 'Bator' },
        { id: 2, name: 'Irina' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Jason' },
        { id: 5, name: 'Abraham' }
      ],
      messages: [ //Array of messages data
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Wasap! How your current React progress?' },
        { id: 4, message: 'Very low. Im just started learning)))' },
      ],
      newMessageBody: ''
    },

    sidebar: {}
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 20,
        message: this._state.profilePage.newPostText,
        likes: 56
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 5, message: body});
      this._callSubscriber(this._state);
  }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.store = store;