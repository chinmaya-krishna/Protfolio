import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <h2 className="text-xl font-bold text-blue-400">My Portfolio</h2>
      <ul className="flex gap-6 list-none">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link to="/certificates" className="hover:text-blue-400">Certificates</Link></li>
        <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar