import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialog from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar topFriends={props.state.sideBar.topFriends} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            Component={() => (
              <Profile
                posts={props.state.profilePage.posts}
                addPost={props.addPost}
              />
            )}
          />
          <Route
            path="/dialogs"
            Component={() => (
              <Dialog
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
              />
            )}
          />
          <Route path="/news" Component={() => <News />} />
          <Route path="/music" Component={() => <Music />} />
          <Route path="/settings" Component={() => <Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// <Route component={} /> - help to setting routes of our components(we should import it from "react-router-dom")
