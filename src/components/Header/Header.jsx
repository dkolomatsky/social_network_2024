import React from "react";
import css from "./Header.module.css";


const Header = () => {
  return (
    <header className={css.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
          alt="logo"></img>
      </header>
  )
}

export default Header;
