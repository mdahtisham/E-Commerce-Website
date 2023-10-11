import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth"
import '../App.css'
import googleimage from "./Iphoneimages/google.png"

export const Login = () => {
    const signUserOut = async () =>{
        signOut(auth)
    }

    const navigate = useNavigate()

    const signInWithGoogle = async () =>{
        const result = await signInWithPopup(auth, provider)
        navigate('/iphone')
    }

    return (
        <div>
            <div className='login-container'>
                <div className='login-box'>
                    <div className='login-box-text'>
                        <h2>Sign In</h2>
                        <p>Create an Account</p>
                    </div>
                    <div className='login-box-button'>
                        <div>
                        <img id='login-google-image' src={googleimage} alt="" height={25} width={25} />
                        </div>
                        <button onClick={signInWithGoogle} id='login-button'>Login With Google</button>
                        <br />
                    </div>
                    <div>
                    <button onClick={signUserOut} id='logout-button'>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}