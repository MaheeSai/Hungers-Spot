import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
const[currState,setCurrState]=useState("Sign Up")
  return (
    <div className="login-popup">
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
            </div>
            <div className="login-popup-inputs">
                {currState==='Login'?<></>:<input type='text'placeholder='enter name' required/>}
                <input type='email' placeholder='enter email' required />
                <input type='password' placeholder='enter password' required/>
            </div>
            <button>{currState==='Sign Up'? 'create account' : "Login"}</button>
            <div className="login-pop-up-condition">
                <input type='checkbox' required/>
                <p>By Continuing I agree to the terms of Use & Privacy Policy</p>
            </div>
            {currState==="Login"?<p>Create  a new Account?<span onClick={()=>setCurrState('Sign Up')}>Click Here</span></p>:<p>Already have an account?<span onClick={()=>setCurrState('Login')}>Login here</span></p>}
        </form>

    </div>
  )
}

export default LoginPopup