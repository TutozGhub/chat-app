import React, { useContext, useEffect, useState } from 'react'
import Login from './Login'
import Logout from './Logout';
import UserState from './UserState';
import { DataContext } from './DataProvider';
import { useMediaQuery } from 'react-responsive';
import BarraMobile from './BarraMobile';

export default function User() {
  const {user, isMobile, setIsMobile, isOnLogin, setIsOnLogin } = useContext(DataContext);
  const [hide, setHide] = useState("");

  setIsMobile(useMediaQuery({ query: '(max-width: 767px)' }));
  
  const update = () => {
    if (isMobile == true & isOnLogin == false){
        setHide("hide");
    }
    else if (isMobile == true & isOnLogin == true){
        setHide("");
    }
  } 

  useEffect(() =>{
      if (isMobile == false) {
        setHide("");
        setIsOnLogin(false);
      }
      else{
        setHide("hide");
      }
    }, [isMobile])

  useEffect(update, [isOnLogin])

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
