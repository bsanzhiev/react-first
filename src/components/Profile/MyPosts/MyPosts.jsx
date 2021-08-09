import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  maxLengthCreator,
  required,
} from "../../../utils/form_validators/validators.js";
import { Textarea } from "../../common/FormControls/FormControls";
import PropTypes from "prop-types";

const maxLength10 = maxLengthCreator(10);

// eslint-disable-next-line react/display-name
const MyPosts = React.memo((props) => {
  /*shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state;
  }*/

  let postsElements = props.posts.map((p) => {
    return <Post message={p.message} key={p.id} likes={p.likes} />;
  });

  // eslint-disable-next-line no-unused-vars
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
});

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

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddPostForm" })(
  AddNewPostForm
);

MyPosts.propTypes = {
  posts: PropTypes.object,
  addPost: PropTypes.object,
};

AddNewPostForm.propTypes = {
  handleSubmit: PropTypes.object,
};

export default MyPosts;
