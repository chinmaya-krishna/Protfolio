import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-8 relative">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-5xl mb-6 shadow-lg shadow-blue-500/30">
          👨‍💻
        </div>

        {/* Text */}
        <p className="text-blue-400 text-lg mb-2 tracking-widest uppercase">Welcome to my portfolio</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Chinmaya</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-4">Full Stack Developer</p>
        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
          I build modern, responsive web applications using the MERN stack. 
          Passionate about clean code and great user experiences.
        </p>

        {/* Buttons */}
       {/* Buttons */}
<div className="flex flex-wrap gap-3 justify-center mb-10 relative z-10">
  <Link
    to="/projects"
    className="relative z-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 md:px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/30 text-sm md:text-base"
  >
    View My Work
  </Link>
  <Link
    to="/contact"
    className="relative z-10 border border-blue-500 hover:bg-blue-500/20 px-6 md:px-8 py-3 rounded-full font-semibold transition-all text-sm md:text-base"
  >
    Hire Me
  </Link>
</div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 justify-center">
          {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'].map(tech => (
            <span key={tech} className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 py-16 px-8 ">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '5+', label: 'Projects Built' },
            { number: '3+', label: 'Certificates' },
            { number: '2+', label: 'Years Learning' },
             { number: '3+', label: 'Hackathons Participated' }
          ].map(stat => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home