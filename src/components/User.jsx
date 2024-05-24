import React, { useEffect, useState } from 'react'
import Login from './Login'
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from './Logout';
import UserState from './UserState';

export default function User() {
  const [user] = useAuthState(auth);
  const [usr, setUsr] = useState({
      img: "",
      name: ""
  })

  useEffect(() =>{
    if (user == null){
        setUsr({
            img: "",
            name: ""
        })
    }
    else{
        setUsr({
            img: user.photoURL,
            name: user.displayName
        })
    }
  }, [user]);

  return (
    <section className='user-content'>
      { user == null ? 
        <Login />
        :
        <Logout />
      }

      <UserState 
      img={usr.img}
      name={usr.name}
      />
    </section>
  )
}
