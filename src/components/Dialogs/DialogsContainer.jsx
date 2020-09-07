/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } 
  from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  //будем избегать ref
  //let newMessageElement = React.createRef();

  let clickSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
    //newMessageBody.current.value = '';
  }

  //В параметрах вместо е проиходит body, подробнее в ноушене 43
  let onNewMessageChange = (body) => {
    //let body = e.target.value; - убираем этот объект - 43 урок
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <Dialogs 
      updateNewMessageBody={ onNewMessageChange }
      sendMessage={ clickSendMessage }
      dialogsPage={ state }
    />
  )
}

export default DialogsContainer;