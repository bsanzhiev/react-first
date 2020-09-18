/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
//import React from 'react';
//import DialogItem from './DialogItem/DialogItem';
//import Message from './Message/Message';
//import s from './Dialogs.module.css';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

//const DialogsContainer = () => {

  //let state = props.store.getState().dialogsPage;

  //будем избегать ref
  //let newMessageElement = React.createRef();

  //let clickSendMessage = () => {
  //  props.store.dispatch(sendMessageCreator());
    //newMessageBody.current.value = '';
  //}

  //let onNewMessageChange = (body) => {
    //let body = e.target.value;
  //  props.store.dispatch(updateNewMessageBodyCreator(body));
  //}

  //return <StoreContext.Consumer> 
  //  { (store) => {
  //      let state = store.getState().dialogsPage;
  //      let clickSendMessage = () => {
  //        store.dispatch(sendMessageCreator());
  //      };

  //      let onNewMessageChange = (body) => {
  //        store.dispatch(updateNewMessageBodyCreator(body));
  //      };

  //      return <Dialogs 
  //        updateNewMessageBody={onNewMessageChange}
  //        sendMessage={clickSendMessage}
  //        dialogsPage={state}/>}}
  //</StoreContext.Consumer>
//}

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps =(dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;