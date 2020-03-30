import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog + ' '+ s.active}>
            Bator
          </div>
          <div className={s.dialog}>
            Irina
          </div>
          <div className={s.dialog}>
            Viktor
          </div>
          <div className={s.dialog}>
            Jason
          </div>
          <div className={s.dialog}>
            Abraham
          </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>Yo</div>
          <div className={s.message}>Wasap! How your current React progress?</div>
          <div className={s.message}>Very low. Im just started learning)))</div>
        </div>
      </div>
    )
}

export default Dialogs;