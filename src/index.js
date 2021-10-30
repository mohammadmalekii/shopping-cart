import React from "react";
import { render } from "react-dom";
import "./App.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
