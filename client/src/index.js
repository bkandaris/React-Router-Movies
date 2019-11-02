import React from "react";
import ReactDOM from "react-dom";
// Import Browser Router
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
// Wrapping the App in Router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
