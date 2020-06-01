import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';

//store.addPost('123qwert')
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} addPost={store.addPost.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
