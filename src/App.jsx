import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chat from './components/Chat'
import User from './components/User'
import './App.css'

function App() {
  return (
    <>
      <User />
      <Chat />
    </>
  )
}

export default App
