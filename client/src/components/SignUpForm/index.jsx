import {useState} from "react";
import { Link } from "react-router-dom";
import * as authService from "../../api/auth.service";


export default function SignUpForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userStatus, setUserStatus] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newUser = {firstName, lastName, email, password, userStatus};
        let res = await authService.register(newUser).then(() => {

            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setUserStatus("")
            setSuccessMsg(`Welcome ${firstName} :)`);
            document.location = "/"
        })

        console.log(res);
        if (!res === 201) {
            alert(`ERROR code: ${res.status}`)
        }
    }
    return(
        <div className="signUpFormComponent">
            
            <form className="signUpForm">
            <h3 className="">Sign Up and Start Teaching!</h3>
                <label htmlFor="firstName">First Name*</label>
                <input 
                    className=""
                    onChange={(e)=> setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    name="firstName"
                    placeholder="First Name"  
                />

                <label htmlFor="lastName">Last Name*</label>
                <input 
                    className=""
                    onChange={(e)=> setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />

                <label htmlFor="email">Email ID*</label>
                <input className="signUpForm-input"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="Email Address"
                />

                <label htmlFor="password">Password*</label>
                <input className="signUpForm-input"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="5+ Characters"
                />
                <div className="">
                    <span>* Sign-Up then Log-In to get started! </span>

                </div>
                <button 
                    className="" 
                    onClick={handleSubmit}
                > Sign Up
                </button>
            </form>
            
            <div className="">
                <span>Have an account?</span>
                
            <div className="logInLink">    
                <Link to="/"><button className="">Log In</button></Link>
                </div>
            </div>
            <h1>{successMsg}</h1>

        </div>
    )
    }