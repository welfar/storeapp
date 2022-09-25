import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./Routes/App";
import { store } from "./Store/store";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
