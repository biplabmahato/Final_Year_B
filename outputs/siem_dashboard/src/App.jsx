import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <h3 className="text-center text-2xl mt-8">Welcome to SIEM Dashboard</h3>
    </>
  )
}

export default App