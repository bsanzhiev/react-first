import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // eslint-disable-next-line react/jsx-key
  let postsElements = props.store.posts.map (
    p => {
      return <Post message={p.message} key={p.id} likes={p.likes} />;
    }
  );

  let newPostElement = React.createRef();

  let addShitPost = () => { //было addPost
    let text = newPostElement.current.value;
    // eslint-disable-next-line react/prop-types
    props.store.addPost(text);
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