import React, { useEffect, useState } from 'react'
import API from '../api'

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    API.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">My <span className="text-blue-400">Projects</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map(project => (
          <div key={project._id} className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-3">
              <a href={project.githubLink} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects