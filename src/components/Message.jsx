import React, { useContext, useEffect, useState } from 'react'
import { formatDate } from './helpers/datetime';
import { DataContext } from './DataProvider';


export default function Message({message}) {
  const { user }  = useContext(DataContext);
  const [clases, setClases] = useState("");

  const isOwn = useEffect(()=>{
    if (message.uid == user?.uid){
      setClases("own");
    }
  }, [user]);

  return (
    <>
      <div
      className={`msg ${clases}`}
      >
        <img
        className='msg-img'
        src={message.photo}
        alt='user'
        referrerPolicy='no-referrer'
        >
        </img>
        <div>
          <h5>{message.name}</h5>
          <section
          className={`msg-text ${clases}`}
          >
            {message.text}
          </section>
          <h6
          className={`date ${clases}`}
          ><small>{formatDate(message.datetime)}</small></h6>
        </div>
      </div>
    </>
  )
}
