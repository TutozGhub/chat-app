import React, { useContext } from 'react'
import { formatDate } from './helpers/datetime';
import { DataContext } from './DataProvider';


export default function Message({message}) {
  const { user }  = useContext(DataContext);

  return (
    <>
      {(message.uid == user?.uid) ? (
        <div className='msg msg-own'>
          <div>
            <h5>{message.name}</h5>
            <section
            className='msg-text  msg-text-own'
            >
              {message.text}
            </section>
            <h6
            className='date date-own'
            ><small>{formatDate(message.datetime)}</small></h6>
          </div>
          <img
          className='msg-img'
          src={message.photo}
          alt='user'
          referrerPolicy='no-referrer'
          ></img>
        </div>
      )
      :
      (
        <div className='msg'>
          <img
          className='msg-img'
          src={message.photo}
          ></img>
          <div>
            <h5>{message.name}</h5>
            <section
            className='msg-text'
            >
              {message.text}
            </section>
            <h6
            className='date'
            ><small>{formatDate(message.datetime)}</small></h6>
          </div>
        </div>
      )}
    </>
  )
}
