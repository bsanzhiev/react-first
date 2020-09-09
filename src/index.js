import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux_store';
//import StoreContext from './StoreContext';
import { Provider } from 'react-redux';

//сложил пока сюда
//state={state} 
//store={store} 
//dispatch={store.dispatch.bind(store)}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);


//let rerenderEntireTree = () => {
//  ReactDOM.render(
//    <BrowserRouter>
//      <Provider store={store}>
//        <App />
//      </Provider>
//    </BrowserRouter>, document.getElementById('root'));
//}

//rerenderEntireTree();

//rerenderEntireTree(store.getState());

//redux не передает измененыый state,
//поэтому передаем таким образом

//store.subscribe(() => {
//  let state = store.getState()
//  rerenderEntireTree(state);
//})

//store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
