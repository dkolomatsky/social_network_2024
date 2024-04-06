import React from "react";
import css from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <div>
  <img className={css.avatar} src={props.avatar} alt="avatar"></img>
  <h5>{props.name}</h5>
  </div>
  )
} 

export default SideBar;