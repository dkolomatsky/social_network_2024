// в библиотеке редакса есть функция которая создает основной store(обьект который я создал вручную в файле state.js)
import createStore, { combineReducers } from "redux"; // импортируем метод создания store
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// чтобы передать в store редьюсеры их надо сначала смешать (склеить)
// посути после смешивания - reducers станет чем то похожим на обьект _state
const reducers = combineReducers(
  // так как мы создаем обьект из наших редьюсеров то надо задавать как свойство: значение
  // поэтому укажем что свойствами будут наши ветки (как в _state) а значениями редьюсеры которые за них отвечают
  {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
  }
);

const store = createStore(reducers);

export default store;
