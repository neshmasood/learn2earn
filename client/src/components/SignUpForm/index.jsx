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
        <>

        <div class="d-flex flex-column flex-root">
            <div class="d-flex flex-column flex-lg-row flex-column-fluid">
                <div class="d-flex flex-column flex-lg-row-auto bg-primary w-xl-600px positon-xl-relative">   
                    <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
                        <div class="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
                            
                            {/* <a href="#" class="py-9 pt-lg-20">
                                <img alt="Logo" src="assets/images/l2l_logo.webp" class="h-70px" />
                            </a>  */}
                        
                            <h1 class="fw-bolder text-white fs-2qx pb-5 pb-md-10">Welcome to Learn2Earn</h1>
                            <p class="fw-bold fs-2 text-white">Please provide the following information to sign up. Once you have completed the following information, you will be directed to make a payment of $6 then re-directed back to log in to your account. 
                            <br /></p>
                        </div>
                        
                        {/* <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px" style={{background-image: url(assets/media/illustrations/sigma-1/17.png)}}></div> */}
                    </div>
                </div>
                <div class="d-flex flex-column flex-lg-row-fluid py-10">
                
                    <div class="d-flex flex-center flex-column flex-column-fluid">
                        {/* <a href="#" class="py-9 pt-lg-20"> */}
                            <img alt="Logo" src="assets/images/l2l_logo.webp" class="h-70px" />
                        {/* </a> */}
                        <div class="w-lg-500px p-10 p-lg-15 mx-auto">
                            <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="../dist/index.html" action="#"> 
                                <div class="text-center mb-10">  
                                    <h1 class="text-dark mb-3">Sign Up</h1>
                                </div>
                                <div class="fv-row mb-10">
                                    <label htmlFor="firstName"  class="form-label fs-6 fw-bolder text-dark">First Name *
                                    </label>
                                    <input class="form-control form-control-lg form-control-solid"
                                    onChange={(e)=> setFirstName(e.target.value)}
                                    value={firstName}
                                    type="text" name="firstName" autocomplete="off" />
                                </div>
                                <div class="fv-row mb-10">
                                    <label htmlFor="lastName" class="form-label fs-6 fw-bolder text-dark">Last Name *
                                    </label>
                                    <input class="form-control form-control-lg form-control-solid"
                                    onChange={(e)=> setLastName(e.target.value)}
                                    value={lastName}
                                    type="text" name="lastName" autocomplete="off" />
                                </div>
                                {/* <div class="fv-row mb-10">
                                    
                                    <label class="form-label fs-6 fw-bolder text-dark">Company Name</label>
                                    
                                    <input class="form-control form-control-lg form-control-solid" type="text" name="email" autocomplete="off" />
                                
                                </div> */}
                                <div class="fv-row mb-10">
                                    <label htmlFor="email" class="form-label fs-6 fw-bolder text-dark">Email Address *
                                    </label>
                                    <input class="form-control form-control-lg form-control-solid"
                                    onChange={(e)=> setEmail(e.target.value)}
                                    value={email}
                                    type="text" name="email"
                                    placeholder="Email Address" autocomplete="off" />
                                </div>
                                <div class="fv-row mb-10">  
                                    <label htmlFor="password" class="form-label fw-bolder text-dark fs-6 mb-0">Password *
                                    </label>
                                    <input class="form-control form-control-lg form-control-solid"
                                    onChange={(e)=> setPassword(e.target.value)}
                                    value={password} type="password" name="password"
                                    placeholder="5+ Characters" autocomplete="off" />
                                </div>

                                <div class="fv-row mb-10">
                                    <label htmlFor="userStatus" class="form-label fw-bolder text-dark fs-6 mb-0">Select User Status *
                                    </label> 
                                    <select class="form-select form-control-lg form-control-solid" onChange={(e)=>setUserStatus(e.target.value)}>
                                    {/* <option> Choose one - - -</option> */}
                                    <option value="admin">Administrator</option>
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="tutor">Tutor</option>
                                    <option value="volunteer">Volunteer</option>
                                </select>
                                </div>
                                <div class="text-center">
                                    <button type="submit" id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5" onClick={handleSubmit}>
                                        <span class="indicator-label">Continue</span>
                                    </button>
                                </div>      
                            </form>
                            <div className="">
                                <span>* Sign-Up then Log-In to get started! </span>
                            </div>
                            <div className="">
                                <span>Have an account?</span>
                            
                                <div className="logInLink">    
                                    <Link to="/"><button className="">Log In</button></Link>
                                </div>
                            </div>
                            <h1>{successMsg}</h1>            
                        </div>           
                    </div>
                </div>
            </div>
        </div>

        </>

    )
}