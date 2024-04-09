import React from "react";
import state, { subscribe } from "./redux/state";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostContent } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          updateNewPostContent={updateNewPostContent}
          addPost={addPost}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
