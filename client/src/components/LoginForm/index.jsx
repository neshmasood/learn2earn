import {useState} from "react";
import {Link} from "react-router-dom"
import * as authService from "../../api/auth.service";


export default function LoginForm () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authService.login(email, password).then(()=> {
            setEmail("")
            setPassword("")
            document.location = "/"
        })
    }


    return(
        <div className="loginFormComponent">
            <h2 className="">Start your journey to help educate someone</h2>
            <form className="loginForm">
                {/* <label htmlFor="email">Email</label> */}
                <input className=""
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="you@example.com"
                />
                {/* <label htmlFor="password">Password</label> */}
                <input className=""
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button 
                    className="" 
                    onClick={handleSubmit}
                > Log In</button>
            </form>

            <div className="">
                <span>Don't have an account?</span>
                <Link to="Signup"><button className="">Sign up</button></Link>
            </div>
        </div>
    )

}