import React from 'react';
import s from './../Dialogs.module.css';

const Message = (messages) => {
  return (
    <div className={s.dialog}>{messages.message}</div>
  )
}

export default Message;