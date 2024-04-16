import { sendMessageActionCreator, updateNewMessageContentActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
    onMessageChange: (messageText) => {
      dispatch(updateNewMessageContentActionCreator(messageText))
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs);
export default DialogsContainer;