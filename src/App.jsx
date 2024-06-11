import { useState } from 'react'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/Footer'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar/>
      <div className='min-h-[84.9vh] '>
      <div className="p-5 absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <Manager/>
      </div>
      
      </div>
      <Footer/>
    </>
  )
}

export default App
