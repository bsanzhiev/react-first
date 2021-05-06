/* eslint-disable react/prop-types */

import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
} from "../../utils/form_validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  // sendMessage будет принимать параметры
  let AddNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <AddMessageFormRedux onSubmit={AddNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

// Код формы выделен в отдельную компоненту
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.sendMessage}>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter your message!"
          validate={[required, maxLength50]}
        />
        <div>
          <button>Send</button>
        </div>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
