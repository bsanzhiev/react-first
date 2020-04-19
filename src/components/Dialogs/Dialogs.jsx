import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = () => {

  let dialogs = [ //Array of dialogs data
    {id: 1, name: 'Bator'},
    {id: 2, name: 'Irina'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Jason'},
    {id: 5, name: 'Abraham'}
  ]

  let messages = [ //Array of messages data
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Wasap! How your current React progress?'},
    {id: 4, message: 'Very low. Im just started learning)))'},
  ]

  // eslint-disable-next-line react/jsx-key
  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)

  // eslint-disable-next-line react/jsx-key
  let messagesElements = messages.map( m => <Message message={m.message}/>);

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