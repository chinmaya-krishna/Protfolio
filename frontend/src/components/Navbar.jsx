import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center relative z-50">
      <h2 className="text-xl font-bold text-blue-400">My Portfolio</h2>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 list-none">
        <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
        <li><Link to="/certificates" className="hover:text-blue-400 transition">Certificates</Link></li>
        <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
      </ul>

      {/* Hamburger Button - Mobile */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 flex flex-col list-none py-4 z-50">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="block px-8 py-3 hover:bg-gray-800 hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className="block px-8 py-3 hover:bg-gray-800 hover:text-blue-400 transition">About</Link></li>
          <li><Link to="/certificates" onClick={() => setMenuOpen(false)} className="block px-8 py-3 hover:bg-gray-800 hover:text-blue-400 transition">Certificates</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)} className="block px-8 py-3 hover:bg-gray-800 hover:text-blue-400 transition">Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block px-8 py-3 hover:bg-gray-800 hover:text-blue-400 transition">Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar