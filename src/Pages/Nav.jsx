import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import '../App.css'
import applelogo from './Iphoneimages/applelogo.png'


export const Nav = () => {

    const [user] = useAuthState(auth)

    return(
        
        <div className="nav">
            <div id="ahticorn">
                AhtiCorn
            </div>
            <div id="navbar">
            <Link id="link" to="/"> <img id="al" src={applelogo} alt="noimg" /> Store </Link>
            <Link id="link" to="/iphone"> iPhone </Link>
            <Link id="link" to="/mac"> Mac </Link>
            {/* <Link id="link" to="/ipad"> iPad </Link> */}
            {/* <Link id="link" to="/watch"> Watch </Link> */}
            {/* <Link id="link" to="/airpods"> AirPods </Link> */}
            <Link id="link" to="/contact"> Contact </Link>
            <Link id="link" to="/login"> Login </Link> 
            </div>
            { user && (
                <>
            {/* <span>{user?.displayName}</span>  */}
            <Link id="link" to="/login"> 
            <span><img className="login-profile-image" src={user?.photoURL || ""} alt="" height={25} width={25} /></span>
            </Link> 
            </>)}
            <div id="cartnavbar">
            {/* <Link id="link" to="/cart"> &#128722; </Link> */}
            </div>
        </div>
    )
  

} 