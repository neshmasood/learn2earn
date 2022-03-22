import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from "../src/components/WelcomePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
