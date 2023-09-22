import storeimage from './Iphoneimages/store-15.jpg'
import { Link } from "react-router-dom"

export const Store = () => {
    return (
        <div className='storecontainer'>
            <div id='ahticornstore'><h3>AhtiCorn</h3></div>
            <img className='store-img' src={storeimage} alt=""  />
            <div id='storebuttonbox'><Link id="storebutton" to="/iphone"> Buy &#x3e; </Link> </div>        
        </div>
    )
}