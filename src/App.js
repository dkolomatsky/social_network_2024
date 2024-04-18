import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer store={props.store} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            Component={() => <Profile store={props.store} />}
          />
          <Route
            path="/dialogs"
            Component={() => <DialogsContainer store={props.store} />}
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
