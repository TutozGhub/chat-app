import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chat from './components/Chat'
import User from './components/User'
import './App.css'
import DataProvider from './components/DataProvider'

function App() {
  return (
    <>
      <DataProvider>
        <User />
        <Chat />
      </DataProvider>
    </>
  )
}

export default App
