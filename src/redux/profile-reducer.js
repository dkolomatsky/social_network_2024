const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_CONTENT = "UPDATE-NEW-POST-CONTENT";

let initialState = {
  posts: [
    { id: 1, post: "Hello, how are you?", count: 3 },
    { id: 2, post: "It's my first post.", count: 10 },
  ],
  newPostContent: "Hello",
};
❌ - дорефакторить создание копии стейта по примеру как в dialogs-reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: state.newPostContent,
        count: 0,
      };
      let stateCopy = { ...state, posts: [...state.posts] }; // ...state - делаем копию обьекта сщстояния - это необходимо для отрисовки компонент после изменений чего то. posts: [...state.posts] - указываем какой конкретно обьект мы хотим скопировать (если этого не сделать то при создаднии копии скопируются только примитивы а обьекты нет)
      stateCopy.posts.push(newPost);
      stateCopy.newPostContent = "";
      return stateCopy; // это вместо break
    }
    case UPDATE_NEW_POST_CONTENT: {
      let stateCopy = { ...state, newPostContent: action.newPostText };
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostContentActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_CONTENT,
    newPostText: text,
  };
};

export default profileReducer;

// в state функции profileReducer приходит конкретная часть state - this._state.profilePage (то есть state = this._state.profilePage)
