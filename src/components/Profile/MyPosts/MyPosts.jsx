import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';



const MyPosts = (props) => {

  let postsElements = props.posts.map (
    p => {
      return <Post message={p.message} key={p.id} likes={p.likes} />;
    }
  );

  let newPostElement = React.createRef();

  let clickAddPost = () => {
    //props.dispatch({ type: 'ADD-POST' });
    props.dispatch(addPostActionCreator());
    newPostElement.current.value = '';
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postBlock}>
    <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={ clickAddPost}>Add post</button>
        </div>
      </div>
      <div>
        { postsElements }
      </div>
    </div>
  )
  // onClick в данном случае вызывает javascript функцию
  //поэтому в фигурных скобках
};

export default MyPosts;