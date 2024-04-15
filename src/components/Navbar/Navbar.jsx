import React from "react";
import css from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Navbar = (props) => {
  const topFriends = props.topFriends.map(f => <SideBar key={f.id} name={f.name} id={f.id} avatar={f.avatar} />)

  return (
<nav className={css.nav}>
  <div className={css.item}>
    <NavLink to="/profile" className={css.item}>Profile</NavLink>
  </div>
  <div className={css.item}>
    <NavLink to="/dialogs" className=''>Messages</NavLink>
  </div>
  <div className={css.item}>
    <NavLink to="/news">News</NavLink>
  </div>
  <div className={css.item}>
    <NavLink to="/music">Music</NavLink>
  </div>
  <div className={css.item}>
    <div className={css.settingsBlock}>
    <NavLink to="/settings">Settings</NavLink>
    </div>
  </div>
  <div className={css.item}>
  <h3>Friends:</h3>
    <div className={css.friendsBlock}>
    { topFriends }
    </div>
  </div>
  
</nav>
  );
}

export default Navbar;