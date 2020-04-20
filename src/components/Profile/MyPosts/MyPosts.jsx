import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (posts) => {

  /*let posts = [ // arrays of Posts Data
    {id: 1, message: 'Hi. How are you?', likes: 13},
    {id: 2, message: 'Its my first post!', likes: 17},
    {id: 3, message: 'I like vaporwave', likes: 22}
  ]*/

  // eslint-disable-next-line react/jsx-key
  let postsElements = posts.map ( p => <Post message={p.message} likes={p.likes} />);

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