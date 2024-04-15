import React from 'react';
import { sendMessageActionCreator, updateNewMessageContentActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  const sendMessage = () => {props.store.dispatch(sendMessageActionCreator())}
  const onMessageChange = (messageText) => {props.store.dispatch(updateNewMessageContentActionCreator(messageText))}
    return (<Dialogs updateNewMessageContent={onMessageChange} sendMessage={sendMessage} dialogsPage={state} />)
}

export default DialogsContainer;