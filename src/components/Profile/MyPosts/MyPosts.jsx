/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  maxLengthCreator,
  required,
} from "../../../utils/form_validators/validators.js";
import { Textarea } from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
    return <Post message={p.message} key={p.id} likes={p.likes} />;
  });

  let newPostElement = React.createRef();

  //let onAddPost - название в видео
  let clickAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={clickAddPost} />
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Whats happen with you?"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post!</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "RrofileAddPostForm" })(
  AddNewPostForm
);

export default MyPosts;
