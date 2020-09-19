/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map (
    p => {
      return <Post message={p.message} key={p.id} likes={p.likes} />;
    }
  );

  let newPostElement = React.createRef();

  //let onAddPost - название в уроке
  let clickAddPost = () => {
    props.addPost();
    //props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postBlock}>
    <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} 
          value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={ clickAddPost }>Add post</button>
        </div>
      </div>
      <div>
        { postsElements }
      </div>
    </div>
  )
  // onClick в данном случае вызывает javascript функцию поэтому в фигурных скобках
};

export default MyPosts;