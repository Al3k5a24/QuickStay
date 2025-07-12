import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import Navbar from './components/Navbar'
import {useLocation} from 'react-router-dom'

function App() {

  // ako je path/owner skalnja se navbar
  const isOwner=useLocation().pathname.includes("owner");

  return (
    <>
     <Header/>
     {!isOwner && <Navbar/>}
    </>
  )
}

export default App
