import React, { useContext, useEffect, useState } from 'react'
import Login from './Login'
import Logout from './Logout';
import UserState from './UserState';
import { DataContext } from './DataProvider';

export default function User() {
  const {user} = useContext(DataContext);

  return (
    <section className='user-content'>
      { user == null ? 
        <Login />
        :
        <Logout />
      }

      <UserState />
    </section>
  )
}
