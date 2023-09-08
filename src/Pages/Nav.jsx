import { Link } from "react-router-dom"
import '../App.css'
import applelogo from './Iphoneimages/applelogo.png'

export const Nav = () => {
    return(
        
        <div className="nav">
            <div id="ahticorn">
                AhtiCorn
            </div>
            <div id="navbar">
            <Link id="link" to="/"> <img id="al" src={applelogo} alt="noimg" /> Store </Link>
            <Link id="link" to="/iphone"> iPhone </Link>
            <Link id="link" to="/mac"> Mac </Link>
            <Link id="link" to="/ipad"> iPad </Link>
            {/* <Link id="link" to="/watch"> Watch </Link> */}
            {/* <Link id="link" to="/airpods"> AirPods </Link> */}
            <Link id="link" to="/contact"> Contact </Link>
            </div>
            <div id="cartnavbar">
            {/* <Link id="link" to="/cart"> &#128722; </Link> */}
            </div>
        </div>
    )
  

} 