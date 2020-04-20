import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogs = [ //Array of dialogs data
  { id: 1, name: 'Bator' },
  { id: 2, name: 'Irina' },
  { id: 3, name: 'Viktor' },
  { id: 4, name: 'Jason' },
  { id: 5, name: 'Abraham' }
];

const messages = [ //Array of messages data
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Yo' },
  { id: 3, message: 'Wasap! How your current React progress?' },
  { id: 4, message: 'Very low. Im just started learning)))' },
];

const posts = [ // arrays of Posts Data
  { id: 1, message: 'Hi. How are you?', likes: 13 },
  { id: 2, message: 'Its my first post!', likes: 17 },
  { id: 3, message: 'I like vaporwave', likes: 22 }
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
