import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (dialogs) => {
  let path = '/dialogs/' + dialogs.id;

  return (
    <div className={s.dialog + ' '+ s.active}>
      <NavLink to={path}>{dialogs.name}</NavLink>
    </div>
  )
}

export default DialogItem;