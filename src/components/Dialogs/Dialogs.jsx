/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }
  // eslint-disable-next-line react/jsx-key
  let dialogsElements = props.state.dialogs.map (
    // eslint-disable-next-line react/jsx-key
    d => <DialogItem name={d.name} id={d.id}/>
  );

  // eslint-disable-next-line react/jsx-key
  let messagesElements = props.state.messages.map (
    m => <Message message={m.message}/>
  );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>

      <div>
        <div className={s.messages}>
          { messagesElements }
        </div>
        <div className={s.sendMessage}>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={ addMessage }>Send</button>
      </div>
      </div>
    </div>
  )
}

export default Dialogs;