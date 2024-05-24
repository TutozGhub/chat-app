import React from 'react'
import { auth } from "../firebase"
import { signOut } from 'firebase/auth'

export default function Logout() {
    const logOut = () =>{
        signOut(auth);
    }
    
  return (
    <button
    className='btn-login btn-logout'
    onClick={logOut}
    >
        <i className="fa-brands fa-google"></i>
        Cerrar Sesion
    </button>
  )
}
