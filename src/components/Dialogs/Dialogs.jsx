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
    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name='Bator' id='1' />
          <DialogItem name='Irina' id='2' />
          <DialogItem name='Viktor' id='3' />
          <DialogItem name='Jason' id='4' />
          <DialogItem name='Abraham' id='5' />          
        </div>

        <div className={s.messages}>
          <Message text='Hi!!!' />
          <Message text='Yo' />
          <Message text='Wasap! How your current React progress?' />
          <Message text='Very low. Im just started learning)))' />
        </div>
      </div>
    )
}

export default Dialogs;