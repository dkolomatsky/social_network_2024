let initialState = {
  topFriends: [
    {
      id: 1,
      name: "Friend1",
      avatar: "https://img.lovepik.com/element/45006/1288.png_860.png",
    },
    {
      id: 2,
      name: "Friend2",
      avatar: "https://img.lovepik.com/element/45006/1283.png_860.png",
    },
    {
      id: 3,
      name: "Friend3",
      avatar:
        "https://w7.pngwing.com/pngs/105/603/png-transparent-anime-avatar-desktop-anime-manga-head-fictional-character.png",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  return stateCopy;
};
export default sidebarReducer;
