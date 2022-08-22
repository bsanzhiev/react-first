import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import WrappedApp from "./App";

ReactDOM.render(<WrappedApp />, document.getElementById("root"));

serviceWorker.unregister();
