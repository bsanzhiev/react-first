/* eslint-disable react/prop-types */
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import { Redirect } from "react-router";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  //props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  // eslint-disable-next-line react/jsx-key
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  //будем избегать ref
  //let newMessageElement = React.createRef();

  let clickSendMessage = () => {
    props.sendMessage();
    //props.store.dispatch(sendMessageCreator());
    //newMessageBody.current.value = '';
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    //props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div>
        <div className={s.messages}>
          <div>
            <div>{messagesElements}</div>
          </div>
        </div>
        <div className={s.sendMessage}>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message!"
          ></textarea>
          <button onClick={clickSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
