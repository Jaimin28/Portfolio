import React from 'react'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Collabortion from './components/Collabortion'
import Info from './components/Info'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Client from './components/Client'

function App() {
  return (
    <div className='flex flex-col bg-[#000]  min-h-screen h-full text-white  items-center '>
      <Navbar />
      <Info />
      <Client />
      <About />
      <Service />
      <Portfolio />
      <Collabortion />
    </div>
  )
}

export default App