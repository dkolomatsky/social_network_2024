import React from 'react';
import css from './Dialog.module.css'

const Dialog = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogItems}>
        <div className={css.dialogItem + " " + css.active}>User1</div>
        <div className={css.dialogItem}>User2</div>
        <div className={css.dialogItem}>User3</div>
        <div className={css.dialogItem}>User4</div>
        <div className={css.dialogItem}>User5</div>
      </div>
      <div className={css.messages}>
        <div className={css.message}>Message 1</div>
        <div className={css.message}>Message 2</div>
        <div className={css.message}>Message 3</div>
      </div>
    </div>
  )
}

export default Dialog;