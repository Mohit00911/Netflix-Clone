import React from 'react'
import './LoginScreen.css'
import LoginBg from '../loginbg.jpg'
const LoginScreen = () => {
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img src={LoginBg} alt=''/>
        </div>
    </div>
  )
}

export default LoginScreen