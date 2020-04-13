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
    <div className={s.message}>{props.text}</div>
  )
}

const Dialogs = (props) => {

  let dD = [ //Array of dialogs data
    {id: 1, name: 'Bator'},
    {id: 2, name: 'Irina'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Jason'},
    {id: 5, name: 'Abraham'}
  ]

  let mD = [ //Array of messages data
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Wasap! How your current React progress?'},
    {id: 4, message: 'Very low. Im just started learning)))'},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dD[0].name} id={dD[0].id} />
        <DialogItem name={dD[1].name} id={dD[1].id} />
        <DialogItem name={dD[2].name} id={dD[2].id} />
        <DialogItem name={dD[3].name} id={dD[3].id} />
        <DialogItem name={dD[4].name} id={dD[4].id} />
      </div>

      <div className={s.messages}>
        <Message text={mD[0].message} />
        <Message text={mD[1].message} />
        <Message text={mD[2].message} />
        <Message text={mD[3].message} />
      </div>
    </div>
  )
}

export default Dialogs;