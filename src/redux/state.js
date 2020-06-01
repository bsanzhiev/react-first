let store = {

  _state: {
    profilePage: {
      posts: [ // arrays of Posts Data
        { id: 1, message: 'Hi. How are you?', likes: 13 },
        { id: 2, message: 'Its my first post!', likes: 17 },
        { id: 3, message: 'I like vaporwave', likes: 22 }
      ],
      newPostText: 'React is awesome!'
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
      ]
    },

    sidebar: {}
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State was changed');
  },

  addPost(postMessage) {
    let newPost = {
      id: 6,
      message: postMessage, // рендерится, но нет текста сообщения, добавил .message - изменить здесь!
      likes: 56
    };

    this._state.profilePage.posts.push(newPost);

    this._state.profilePage.newPostText = '';

    this._callSubscriber(this._state);
  },

  addMessage(addNewMessage) {
    let newMessage = {
      id: 5,
      message: addNewMessage
    };

    this.state.dialogsPage.messages.push(newMessage);

    this._callSubscriber(this._state);
  },

// этого кода не было. В каком уроке я пропустил?
//  updateNewPostText(newText) {
//    this._state.profilePage.newPostText = newText;
//    this._callSubscriber(this._state);
//  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }

};

export default store;
