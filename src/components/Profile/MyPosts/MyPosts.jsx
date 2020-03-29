import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
    My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Delete post</button>
      </div>
      <div>
        <Post message='Hi. How are you?' likes='20' />
        <Post message='Its my first post!' likes='30' />
        <Post message='I like vaporwave' likes='50' />
      </div>
    </div>
  )
};

export default MyPosts;