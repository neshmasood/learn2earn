import {useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import * as authService from "./api/auth.service";
import Users from "./components/Users"
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from "../src/pages/WelcomePage";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userActive = () => {
    if(authService.currentUser()) {
        setIsLoggedIn(true);
       
    } else {
        setIsLoggedIn(false);
    }
}

useEffect(()=> {
  userActive();
},[])


if (isLoggedIn){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="users" element={<Users />} />
      </Routes>
     
    </div>
  );

}

}

export default App;
