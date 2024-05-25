import React, { useContext, useEffect, useState } from 'react'
import Login from './Login'
import Logout from './Logout';
import UserState from './UserState';
import { DataContext } from './DataProvider';
import { useMediaQuery } from 'react-responsive';
import BarraMobile from './BarraMobile';

export default function User() {
  const {user, isMobile, setIsMobile, isOnLogin } = useContext(DataContext);
  const [hide, setHide] = useState("");

    
  useEffect(()=>{
    if (isMobile == false) {
        setHide("");
    }
    else{
      setHide("hide");
    }
}, [isMobile])

useEffect(()=>{
  if (isOnLogin == true) {
      setHide("");
  }
  else if (isMobile == true & isOnLogin == false){
      setHide("hide");
  }
}, [isOnLogin])

  setIsMobile(useMediaQuery({ query: '(max-width: 767px)' }));

  return (
    <section className={`user-content ${hide}`}>
    {isMobile ? <BarraMobile /> : ""}
      { user == null ? 
        <Login />
        :
        <Logout />
      }

      <UserState />
    </section>
  )
}
