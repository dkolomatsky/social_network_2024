import React from 'react';
import css from './Dialog.module.css'
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';


const Dialog = (props) => {

const dialogsElements = props.dialogs.map(d => <DialogItems name={d.name} id={d.id} /> )
const messagesElements = props.messages.map(m => <Messages message={m.message} />)


  return (
    <div className={css.dialogs}>
      <div className={css.dialogItems}>
         { dialogsElements }
      </div>
      <div className={css.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialog;