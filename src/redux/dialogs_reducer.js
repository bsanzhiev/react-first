const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 5, message: body});
      return state;
    }

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default profileReducer;