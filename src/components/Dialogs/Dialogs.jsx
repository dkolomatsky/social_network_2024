import React from 'react';
import css from './Dialog.module.css'
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';
import { sendMessageActionCreator, updateNewMessageContentActionCreator } from '../../redux/dialogs-reducer';


const Dialog = (props) => {

const dialogsElements = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id} avatar={d.avatar} /> )
const messagesElements = props.state.messages.map(m => <Messages message={m.message} />)

let newMessageText = props.state.newMessageContent;

const sendMessage = () => {props.dispatch(sendMessageActionCreator())}
const onMessageChange = (e) => {
  let messageText = e.target.value;
  props.dispatch(updateNewMessageContentActionCreator(messageText))
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

export default Dialog;