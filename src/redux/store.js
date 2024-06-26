import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hello, how are you?", count: 3 },
        { id: 2, post: "It's my first post.", count: 10 },
      ],
      newPostContent: "Hello",
    },
    dialogsPage: {
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
    },
    sideBar: {
      topFriends: [
        {
          id: 6,
          name: "Friend1",
          avatar: "https://img.lovepik.com/element/45006/1288.png_860.png",
        },
        {
          id: 7,
          name: "Friend2",
          avatar: "https://img.lovepik.com/element/45006/1283.png_860.png",
        },
        {
          id: 8,
          name: "Friend3",
          avatar:
            "https://w7.pngwing.com/pngs/105/603/png-transparent-anime-avatar-desktop-anime-manga-head-fictional-character.png",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //⛳
  },
  dispatch(action) {
    // ⛳ - ВАЖНО при создании action всегда нужно задавть ему type иначе будет не понятно к какому методу будет применен этот action
    // в state методов редьюсеров передаем конкретный участок state и action
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;

// ⛳ - rerenderEntireTree(state);
/* отдаем обьект state чтобы его можно было использовать его там где создается функция rerenderEntireTree и во все места где нужно его передать при вызове этой функции
 */

// ⛳ - observer - наблюдатель который смотрит за состоянием (в него можно передавать за чем смотреть)
// ⛳ - observer - это патерн !!!!!! (есть и другие паттерны - onClick, onChange etc)

// ⛳ - dispatch - этот метод будет управлять вызовом всех методов через параметр action и его type (и при необходимости другие свойства)
// в dispatch(action) , action - это ОБЬЕКТ !!!!!!!!
