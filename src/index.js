import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
//import { BrowserRouter } from "react-router-dom";
//import store from "./redux/redux_store";
//import StoreContext from './StoreContext';
//import { Provider } from "react-redux";
import "./index.css";
//import App from "./App";
import WrappedApp from "./App";

ReactDOM.render(<WrappedApp />, document.getElementById("root"));

/* Подключили хранилище состояния к приложению */
/* ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
); */

serviceWorker.unregister();
