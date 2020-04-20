import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // eslint-disable-next-line react/jsx-key
  // eslint-disable-next-line react/prop-types
  let postsElements = props.posts.map (
    p => <Post message={p.message} key={p.id} likes={p.likes} />
  );

  return (
    <div className={s.postBlock}>
    <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        { postsElements }
      </div>
    </div>
  )
};

export default MyPosts;