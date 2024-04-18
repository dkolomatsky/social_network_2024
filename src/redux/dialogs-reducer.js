const SEND_MESSAGE = "SAND-MESSAGE";
const UPDATE_NEW_MESSAGE_CONTENT = "UPDATE-NEW-MESSAGE-CONTENT";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "User1",
      avatar:
        "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Bear-Avatar-icon.png",
    },
    {
      id: 2,
      name: "User2",
      avatar: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
    },
    {
      id: 3,
      name: "User3",
      avatar: "https://cdn-icons-png.flaticon.com/512/5556/5556512.png",
    },
    {
      id: 4,
      name: "User4",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUM_cV78y_yYv06H2siIB0XKsMKklI2OmnV85nwJ0cpg&s",
    },
    {
      id: 5,
      name: "User5",
      avatar:
        "https://as1.ftcdn.net/v2/jpg/01/21/93/74/1000_F_121937450_E3o8jRG3mKbMaAFprSuNOlyrLraSVVua.jpg",
    },
  ],
  messages: [
    { id: 1, message: "message1" },
    { id: 2, message: "message2" },
    { id: 3, message: "message3" },
    { id: 4, message: "message4" },
    { id: 5, message: "message5" },
  ],
  newMessageContent: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: 6, message: state.newMessageContent },
        ], //[...state.messages, newMessage], ...state.messages - означает что мы получаем данные а newMessage после запятой означает что что то добавляем в наш массив (это вместо отдельной строки где надо пушить newMessage в копию обьекта stateCopy)
        newMessageContent: "",
      };
    case UPDATE_NEW_MESSAGE_CONTENT:
      return {
        ...state,
        newMessageContent: action.newMessageText,
      };
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
