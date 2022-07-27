import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Layout from "./Layout/Layout";




ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);


