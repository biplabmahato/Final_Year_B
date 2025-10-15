import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Landing from './components/Landing'
import Predict from './components/Predict'


function App() {
  return (
    <>
      {/* <Navbar />
      <Header />
      <Landing/> */}
      <Predict/>
      {/* <Landing/> */}
      <h3 className="text-center text-2xl mt-8">Welcome to SIEM Dashboard</h3>
    </>
  )
}

export default App