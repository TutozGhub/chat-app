import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataProvider';

export default function UserState() {

  const {user} = useContext(DataContext);
  const [usr, setUsr] = useState({
      img: "",
      name: ""
  })

  useEffect(() =>{
    if (user == null){
        setUsr({
          photoURL: "",
          displayName: ""
        })
    }
    else{
        setUsr({
          photoURL: user.photoURL,
          displayName: user.displayName
        })
    }
  }, [user]);

  return (
    <div className='user-state'>
        <img src={usr.photoURL}></img>
        <h3>{usr.displayName}</h3>
    </div>
  )
}
