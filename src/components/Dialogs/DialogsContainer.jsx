import React from 'react';
import { sendMessageActionCreator, updateNewMessageContentActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;
//   const sendMessage = () => {props.store.dispatch(sendMessageActionCreator())}
//   const onMessageChange = (messageText) => {props.store.dispatch(updateNewMessageContentActionCreator(messageText))}
//     return (<Dialogs updateNewMessageContent={onMessageChange} sendMessage={sendMessage} dialogsPage={state} />)
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageContent: (messageText) => {
      dispatch(updateNewMessageContentActionCreator(messageText))
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer; 