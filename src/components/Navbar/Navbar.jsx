import React from "react";
import css from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <NavLink to="/settings">Settings</NavLink>
  </div>
</nav>
  );
}

export default Navbar;