import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider as ReduxStoreProvider } from "react-redux";
import store from "./redux/store";
import { StoreProvider } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ReduxStoreProvider store={store}>
      <StoreProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </StoreProvider>
    </ReduxStoreProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
