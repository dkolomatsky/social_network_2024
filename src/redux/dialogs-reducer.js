const SEND_MESSAGE = "SAND-MESSAGE";
const UPDATE_NEW_MESSAGE_CONTENT = "UPDATE-NEW-MESSAGE-CONTENT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageContent,
      };
      state.messages.push(newMessage);
      state.newMessageContent = "";
      return state;
    case UPDATE_NEW_MESSAGE_CONTENT:
      state.newMessageContent = action.newMessageText;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageContentActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_CONTENT,
    newMessageText: text,
  };
};

export default dialogsReducer;

// в state функции dialogsReducer приходит конкретная часть state - this._state.dialogsPage (то есть state = this._state.dialogsPage)
