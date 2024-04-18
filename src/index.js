import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// ⛳
/*
dispatch={store.dispatch.bind(store)}
чтобы не терялся контекст куда смотрят методы мы их забиндим к конкретному обьекту
если не прибиндить то контекст при вызове этих методов будет терятся
*/
