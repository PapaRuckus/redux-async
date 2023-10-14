import React from "react";
import { createRoot } from "react-dom/client"; 

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import reducer from "./reducer";

const store = createStore(reducer);

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
