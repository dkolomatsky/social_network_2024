import React from "react";
import css from './Navbar.module.css';

const Navbar = () => {
  return (
<nav className={css.navbar}>
  <div className={css.item}>
    <a href="#/" className={`${css.link} ${css.active}`}>Profile</a>
  </div>
  <div className={css.item}>
    <a className={css.link} href="#/">News</a>
  </div>
  <div className={css.item}>
    <a className={css.link} href="#/">Messages</a>
  </div>
  <div className={css.item}>
    <a className={css.link} href="#/">Music</a>
  </div>
  <div className={css.item}>
    <a className={css.link} href="#/">Settings</a>
  </div>
</nav>
  );
}

export default Navbar;