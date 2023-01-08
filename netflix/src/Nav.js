import React, { useEffect, useState } from 'react'
import './Nav.css'
import Logo from './logo.png'
const Nav = () => {


const [show,handleShow]=useState(false)

const tansitionNavBar=()=>{
    if(window.scrollY > 100){
        handleShow(true)
    }else{
        handleShow(false)
    }

}



    useEffect(()=>{
        window.addEventListener("scroll",tansitionNavBar)
        return ()=> window.removeEventListener("scroll",tansitionNavBar)
    },[])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
    <div className='nav__contents'>

        <img className='nav__logo' src={Logo} alt='netflix'/>
        <img className='nav__avatar' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='avatar'/>
    </div>
    </div>
  )
}

export default Nav