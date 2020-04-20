let state = {
  profilePage: {
    posts: [ // arrays of Posts Data
      { id: 1, message: 'Hi. How are you?', likes: 13 },
      { id: 2, message: 'Its my first post!', likes: 17 },
      { id: 3, message: 'I like vaporwave', likes: 22 }
    ]
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
  }
}

export default state;