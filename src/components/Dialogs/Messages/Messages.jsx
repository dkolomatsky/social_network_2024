import React from 'react';
import css from './../Dialog.module.css'

const Messages = (props) => {
  return (
    <div className={css.message}>{props.message}</div>
  )
}


export default Messages;