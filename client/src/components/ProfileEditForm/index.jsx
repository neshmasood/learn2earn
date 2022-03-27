import {useState} from "react";
import * as userService from "../../api/user.service";
import * as authService from "../../api/auth.service";



// Edit Profile Form
export default function ProfileEditForm(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userStatus, setUserStatus] = useState("");
 
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let updatedUser = {
            firstName, 
            lastName,
            userStatus 
 
            };
        let res = await userService.update(`${props.profile._id}`,updatedUser).then(() => {
            console.log(updatedUser);
            document.location = "/profile"
        })

        console.log(res);
        if (!res === 201) {
            alert(`ERROR code: ${res.status}`)
        }
    }

    const deleteSubmit = () => {
        userService.destroy(`${props.profile._id}`);
        authService.logout();
        window.location = "/profile"
    }

    const cancelClick = () => {
        window.location ="/profile"
    }

    return(
        <div className="profileEditFormComponent">
            <div> 
                <h2 className="">Edit Your Profile, {props.profile.firstName} </h2>
            </div>
            <form className="">
                <label htmlFor="firstName">First Name</label>
                <input 
                    className="profileEditForm-input"
                    onChange={(e)=> setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    name="firstName"
                    placeholder="First Name"  
                />

                <label htmlFor="lastName">Last Name</label>
                <input 
                    className="profileEditForm-input"
                    onChange={(e)=> setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />

                <label htmlFor="userStatus">Select User Status*</label>
                <select className="signUpForm-input" onChange={(e)=>setUserStatus(e.target.value)}>
                    <option>- - -</option>
                    <option value="admin">Administrator</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="tutor">Tutor</option>
                    <option value="volunteer">Volunteer</option>
                </select>

                <button className=""
                    onClick={handleSubmit}
                > Update
                </button>
            </form>

            <div className="">
                <button className=""
                    onClick={deleteSubmit}
                > Delete Account
                </button>
                <button className=""
                    onClick={cancelClick}
                >Cancel
                </button>
            </div>
        </div>
    )

}