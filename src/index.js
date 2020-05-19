import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/state';

//addPost('Bator best React fronteder!')
let rerenderEntireTree = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={ store }/>
    </BrowserRouter>, document.getElementById('root'));
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store);

serviceWorker.unregister();
