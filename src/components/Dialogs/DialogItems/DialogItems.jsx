import React from 'react';
import css from './../Dialog.module.css'
import { NavLink } from 'react-router-dom';


const DialogItems = (props) => {
  let path = "/dialogs/";
  return (
    <div className={css.dialogItem + " " + css.active}>
      
      <NavLink to={path}><img className={css.avatar} src={props.avatar} alt='ava'></img>{props.name}</NavLink>
    </div>
 )
}

export default DialogItems;