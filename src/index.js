import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux_store';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
      state={state} 
      store={store} 
      dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

//redux не передает измененыый state,
//поэтому передаем таким образом
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state);
})

//store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
