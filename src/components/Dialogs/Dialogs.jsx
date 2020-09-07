/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { updateNewMessageBodyCreator, sendMessageCreator } 
  from '../../redux/dialogs_reducer';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map (
    d => <DialogItem name={d.name} id={d.id}/>
  );

  let messagesElements = state.messages.map (
    m => <Message message={m.message}/>
  );

  let newMessageBody = state.newMessageBody;

  //будем избегать ref
  //let newMessageElement = React.createRef();

  let clickSendMessage = () => {
    props.sendMessage();
    //props.store.dispatch(sendMessageCreator());
    //newMessageBody.current.value = '';
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    //props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>

      <div>
        <div className={s.messages}>
          <div>
            <div>{ messagesElements }</div>
          </div>
        </div>
        <div className={s.sendMessage}>
          <textarea 
            value={newMessageBody} 
            onChange = {onNewMessageChange}
            placeholder='Enter your message!'>
          </textarea>
          <button onClick={clickSendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;