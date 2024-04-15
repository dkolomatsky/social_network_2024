import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          store={store}
          state={state}
          dispatch={store.dispatch.bind(store)} //⛳
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// ⛳
/*
dispatch={store.dispatch.bind(store)}
чтобы не терялся контекст куда смотрят методы мы их забиндим к конкретному обьекту
если не прибиндить то контекст при вызове этих методов будет терятся
*/
