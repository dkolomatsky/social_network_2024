const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_CONTENT = "UPDATE-NEW-POST-CONTENT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        post: state.newPostContent,
        count: 0,
      };
      state.posts.push(newPost);
      state.newPostContent = "";
      return state; // это вместо break
    case UPDATE_NEW_POST_CONTENT:
      state.newPostContent = action.newPostText;
      return state;
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
