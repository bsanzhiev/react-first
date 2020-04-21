import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (dialogs) => {
  let path = '/dialogs/' + dialogs.id;

  return (
    <div className={s.dialog + ' '+ s.active}>
      <NavLink to={path}>
        <img src='https://c7.hotpng.com/preview/348/800/890/computer-icons-avatar-user-login-avatar-thumbnail.jpg'></img>
        {dialogs.name}
      </NavLink>
    </div>
  )
}

export default DialogItem;