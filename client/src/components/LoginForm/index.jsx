import {useState} from "react";
// import {Link} from "react-router-dom"
import * as authService from "../../api/auth.service";


export default function LoginForm () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authService.login(email, password).then(()=> {
            setEmail("")
            setPassword("")
            document.location = "/profile"
        })
    }


    return(

        <div class="d-flex flex-column flex-root">
        <div class="d-flex flex-column flex-lg-row flex-column-fluid">
            <div class="d-flex flex-column flex-lg-row-auto bg-primary w-xl-600px positon-xl-relative">
                <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
                    <div class="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
                        {/* <a href="../dist/index.html" class="py-9 pt-lg-20">
                            <img alt="Logo" src="assets/images/l2l_logo.webp" class="h-70px" />
                        </a> */}
                        <h1 class="fw-bolder text-white fs-2qx pb-5 pb-md-10">Welcome to Learn2Earn</h1>
                        <p class="fw-bold fs-2 text-white">Learn2Earn is an educational mentoring app that connects volunteer tutors from around the world to refugees. Mentors can pick from a variety of subjects to tutor and the app matches them with a refugee looking to learn that subject. Please Login to start! 
                        <br /></p>
                        
                    </div>   
                </div>
            </div>
            
            <div class="d-flex flex-column flex-lg-row-fluid py-10">
                
                <div class="d-flex flex-center flex-column flex-column-fluid">
                    
                    <div class="w-lg-500px p-10 p-lg-15 mx-auto">
                    
                        <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="../dist/index.html" action="#">
                        
                            <div class="text-center mb-10">
                                <div>
                                <h1 class="text-dark mb-3">Login to your account</h1>
                                </div>
                            
                               
                            
                                <div class="text-gray-600 fw-bold fs-4">New Here?
                                
                                <a href="/signUp" class="link-primary fw">Create an Account</a>
                                </div>
                                
                            </div>
                            
                            <div class="fv-row mb-10">
                                
                                <label class="form-label fs-6 fw-bolder text-dark">Email</label>
                                
                                <input class="form-control form-control-lg form-control-solid"
                                onChange={(e)=> setEmail(e.target.value)}
                                value={email}
                                 type="text" name="email" autocomplete="off" />
                                
                            </div>
                        
                            <div class="fv-row mb-10">
                                
                                <div class="">
                                
                                    <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                                    
                                    {/* <a href="../dist/authentication/sign-in/password-reset.html" class="link-primary fs-6 fw-bolder">Forgot Password ?</a> */}
                                </div>
                            
                                <input class="form-control form-control-lg form-control-solid"
                                 onChange={(e)=> setPassword(e.target.value)}
                                 value={password}
                                type="password" name="password" autocomplete="off" />
                                
                            </div>
                            
                            <div class="text-center">
                                
                                <button type="submit" id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5"
                                onClick={handleSubmit} >
                                    <span class="indicator-label">Login</span>
                                </button>
                            
                            </div>				
                        </form>
                        
                    </div>
                </div>
                <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                </div>
            </div>
        </div>
    </div>

        
    )

}


