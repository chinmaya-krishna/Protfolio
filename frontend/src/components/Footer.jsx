import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left - Name & tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Chinmaya Krishna
            </h3>
            <p className="text-gray-400 text-sm mt-1">Full Stack Developer • MERN Stack</p>
          </div>

          {/* Center - Links */}
          <div className="flex gap-6">
            <Link to="/" className="text-gray-400 hover:text-blue-400 text-sm transition">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm transition">About</Link>
            <Link to="/projects" className="text-gray-400 hover:text-blue-400 text-sm transition">Projects</Link>
            <Link to="/certificates" className="text-gray-400 hover:text-blue-400 text-sm transition">Certificates</Link>
            <Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition">Contact</Link>
          </div>

          {/* Right - Social */}
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition">
              <span className="text-sm font-bold">Gh</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition">
              <span className="text-sm font-bold">Li</span>
            </a>
            <a href="mailto:chinnuaithal2005@gmail.com" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition">
              <span className="text-sm font-bold">@</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center">
        <p className="text-gray-500 text-sm">© 2026 Chinmaya Krishna • Built using MERN Stack</p>
      </div>

    </footer>
  )
}

export default Footer