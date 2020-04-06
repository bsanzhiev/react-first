import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let pD = [ // arrays of Posts Data
    {id: 1, message: 'Hi. How are you?', likes: 13},
    {id: 2, message: 'Its my first post!', likes: 17},
    {id: 3, message: 'I like vaporwave', likes: 22}
  ]
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
        <Post message={pD[0].message} likes={pD[0].likes} />
        <Post message={pD[1].message} likes={pD[1].likes} />
        <Post message={pD[2].message} likes={pD[2].likes} />
      </div>
    </div>
  )
};

export default MyPosts;