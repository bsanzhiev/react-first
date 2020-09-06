/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
//import DialogItem from './DialogItem/DialogItem';
//import Message from './Message/Message';
//import s from './Dialogs.module.css';
import { updateNewMessageBodyCreator, sendMessageCreator } 
  from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  //будем избегать ref
  //let newMessageElement = React.createRef();

  let clickSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
    //newMessageBody.current.value = '';
  }

  let onNewMessageChange = (body) => {
    //let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (<Dialogs 
    updateNewMessageBody={onNewMessageChange}
    sendMessage={clickSendMessage}
    dialogsPage={state}/>)
}

export default DialogsContainer;