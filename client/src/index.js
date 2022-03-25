import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <h2>Hello World!</h2>,
    <App />
  </React.StrictMode>,
  </BrowserRouter>,
  document.getElementById('root')
);


