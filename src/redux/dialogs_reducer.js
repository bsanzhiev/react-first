const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
    { id: 4, message: "Very low. Im just started learning)))" },
  ],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      };
    }

    default:
      return state;
  }
};

// newMessageBody уходит в экшн
export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default profileReducer;
