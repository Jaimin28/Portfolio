import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img className="w-12 h-12 " src={logo} alt="" />
        </div>
        
        <div >
          <ul className="flex items-center gap-8">
            <li className="text-white hover:text-lime-400 transition">Home</li>
            <li className="text-white hover:text-lime-400 transition">Service</li>
            <li className="text-white hover:text-lime-400 transition">Portfolio</li>
            <li className="text-white hover:text-lime-400 transition">Blog</li>
            <li className="text-white hover:text-lime-400 transition">Contact</li>
          </ul>
        </div>

        <button className="px-6 py-2 border border-white text-white hover:bg-lime-400 hover:border-lime-400 transition">
          Get in Touch
        </button>
      </div>
    </nav>
  )
}

export default Navbar