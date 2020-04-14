import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog + ' '+ s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

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

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)

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