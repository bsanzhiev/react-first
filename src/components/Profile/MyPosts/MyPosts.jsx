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

  let addShitPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={s.postBlock}>
    <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addShitPost }>Add post</button>
        </div>
      </div>
      <div>
        { postsElements }
      </div>
    </div>
  )
};

export default MyPosts;