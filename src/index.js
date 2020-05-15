import * as serviceWorker from './serviceWorker';

import state, { subscribe } from './redux/state';
//import { addPost } from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

//addPost('Bator best React fronteder!')
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addMessage={ addMessage }/>,
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
