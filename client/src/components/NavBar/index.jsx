import {NavLink} from "react-router-dom";
import Logout from '../Logout';



// Navigation Bar for top of page. 
// ( Displays once User is Signed In
export default function NavBar(props) {

    return(
        <>
        <header>
            <NavLink to="/profile">Profile Page</NavLink>
            <div>
                <span>{props.firstName}</span>
            </div>
            <div>
                <h5>Link to google calendar</h5>
            </div>
            <div>
                <Logout />
            </div>
        </header>
        </>
 
  );
};