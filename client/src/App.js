import {useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import * as authService from "./api/auth.service";
import Users from "./components/Users"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from "./pages/WelcomePage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEditForm from "./components/ProfileEditForm";
import NavBar from "../src/components/NavBar";
import FeedbackForm from "./components/FeedbackForm";




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState("");

  const userActive = () => {
    if(authService.currentUser()) {
        setIsLoggedIn(true);
        fetchProfile()
       
    } else {
        setIsLoggedIn(false);
    }
}
  const fetchProfile = async () => {
  await authService.getProfile().then(res => {
      setProfile(res.data.data)
  })
}

useEffect(()=> {
  userActive();
},[])


if (isLoggedIn){
  return (
    <div className="App">

      <NavBar firstName={profile.firstName}/>

      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/profile" element={<ProfilePage profile={profile}/>} />
        <Route path="/signUp" element={<SignUpPage />}/>
        <Route path="users" element={<Users />} />
        <Route path="profile/edit" element={<ProfileEditForm profile={profile}/>} />
        <Route path="feedback" element={<FeedbackForm/>} />
      </Routes>
     
    </div>
  );

} else {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<WelcomePage />}/>
              <Route path="/signup" element={<SignUpPage />}/>
              <Route path="/profile" element={<ProfilePage />}/>
          </Routes>
      </div>
  );
}

}

export default App;
