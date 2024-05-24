import React from 'react'

export default function UserState({img, name}) {
  return (
    <div className='user-state'>
        <img src={img}></img>
        <h3>{name}</h3>
    </div>
  )
}
