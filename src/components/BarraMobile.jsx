import React, { useContext } from 'react'
import { DataContext } from './DataProvider'

export default function BarraMobile() {

  const {isOnLogin, setIsOnLogin} = useContext(DataContext);
  return (
    <div
    className='barra-mobile'
    >
      <i
      className="fa-solid fa-bars"
      onClick={()=>{setIsOnLogin(!isOnLogin)}}
      ></i>
    </div>
  )
}
