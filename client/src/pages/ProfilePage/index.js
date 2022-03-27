import React from "react";
import {Link} from "react-router-dom";
import FeedbackForm from "../../components/FeedbackForm";


// Displays Signed-In User's Profile and Data

export default function ProfilePage (props) {
    
    return(
        <div className="profilePage">
            <div className="">
                <div className="profile">
                    <h3>{props.profile.firstName} {props.profile.lastName} {props.profile.email}</h3>
                </div>
                <div>
                    <Link to="/profile/edit">
                        <button className="">Edit Profile</button>
                    </Link>
                </div>
                <div>
                <FeedbackForm />
                </div>    
            </div>
        </div>
    )

}