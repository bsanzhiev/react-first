/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  // eslint-disable-next-line react/jsx-key
  let dialogsElements = props.dialogs.map (
    // eslint-disable-next-line react/jsx-key
    d => <DialogItem name={d.name} id={d.id}/>
  );

  // eslint-disable-next-line react/jsx-key
  let messagesElements = props.messages.map (
    m => <Message message={m.message}/>
  );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>

      <div className={s.messages}>
      { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;