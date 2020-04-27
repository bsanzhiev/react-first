import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

//addPost('Bator best React fronteder!')
export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addMessage={ addMessage }/>,
    </BrowserRouter>, document.getElementById('root'));
}


