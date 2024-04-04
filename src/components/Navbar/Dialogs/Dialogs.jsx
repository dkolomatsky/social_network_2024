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

  let dialogsData = [
    { id: 1 , name: "User1" },
    { id: 2 , name: "User2" },
    { id: 3 , name: "User3" },
    { id: 4 , name: "User4" },
    { id: 5 , name: "User5" },
  ]

  let messagesData = [
    {message: "message1"},
    {message: "message2"},
    {message: "message3"},
  ]

  return (
    <div className={css.dialogs}>
      <div className={css.dialogItems}>
        <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItems name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItems name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItems name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItems name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={css.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  )
}

export default Dialog;