import React from 'react';
import css from './Dialog.module.css'
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';



const Dialogs = (props) => {
  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} key={d.id} id={d.id} avatar={d.avatar} /> )
  const messagesElements = state.messages.map(m => <Messages key={m.id} message={m.message} />)

let newMessageText = state.newMessageContent;

const sendMessage = () => {props.sendMessage()}
const onMessageChange = (e) => {
  let messageText = e.target.value;
  props.updateNewMessageContent(messageText)
}

  return (
    <div className={css.dialogs}>
      <div className={css.dialogItems}>
         { dialogsElements }
      </div>
      <div className={css.messages}>
        { messagesElements }
      <div>
          <div>
             <textarea placeholder='enter your message ...' onChange={onMessageChange} value={newMessageText}></textarea>
          </div>
          <div>
             <button onClick={sendMessage}>Send</button>
          </div>
      </div>
      </div>

    </div>
  )
}

export default Dialogs;