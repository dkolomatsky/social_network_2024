import React from 'react';
import css from './Dialog.module.css'
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';
import { sendMessageActionCreator, updateNewMessageContentActionCreator } from '../../redux/state';


const Dialog = (props) => {

const dialogsElements = props.dialogs.map(d => <DialogItems name={d.name} id={d.id} avatar={d.avatar} /> )
const messagesElements = props.messages.map(m => <Messages message={m.message} />)

let newMessageElement = React.createRef();

const sendMessage = () => {props.dispatch(sendMessageActionCreator())}
const onMessageChange = () => {
  let messageText = newMessageElement.current.value;
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
      <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea></div>
           <button onClick={sendMessage}>Add message</button>
      </div>
      </div>

    </div>
  )
}

export default Dialog;