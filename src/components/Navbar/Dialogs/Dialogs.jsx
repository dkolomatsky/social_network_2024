import React from 'react';
import css from './Dialog.module.css'
import { NavLink } from 'react-router-dom';


const DialogItems = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={css.dialogItem + " " + css.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
 )
}

const Message = (props) => {
  return (
    <div className={css.message}>{props.message}</div>
  )
}

const Dialog = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogItems}>
        <DialogItems name="User1" id="1" />
        <DialogItems name="User2" id="2" />
        <DialogItems name="User3" id="3" />
        <DialogItems name="User4" id="4" />
        <DialogItems name="User5" id="5" />
      </div>
      <div className={css.messages}>
        <Message message="message1" />
        <Message message="message2" />
        <Message message="message3" />
      </div>
    </div>
  )
}

export default Dialog;