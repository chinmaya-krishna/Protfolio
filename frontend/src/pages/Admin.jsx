import React, { useState, useEffect } from 'react'
import API from '../api'

const CLOUD_NAME = 'dimx5ok9x'
const UPLOAD_PRESET = 'portfolio_uploads'
const ADMIN_PASSWORD = 'Bhargavi@143'

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [projects, setProjects] = useState([])
  const [certificates, setCertificates] = useState([])
  const [projectForm, setProjectForm] = useState({
    title: '', description: '', githubLink: '', liveLink: '', image: ''
  })
  const [certForm, setCertForm] = useState({
    name: '', issuer: '', date: '', link: '', image: ''
  })
  const [certImageFile, setCertImageFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [editingCert, setEditingCert] = useState(null)

  useEffect(() => {
    if(isLoggedIn) {
      API.get('/api/projects').then(res => setProjects(res.data))
      API.get('/api/certificates').then(res => setCertificates(res.data))
    }
  }, [isLoggedIn])

  const handleLogin = () => {
    if(password === ADMIN_PASSWORD) {
      setIsLoggedIn(true)
    } else {
      alert('Wrong password!')
    }
  }

  // Upload image to Cloudinary
  const uploadImage = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', UPLOAD_PRESET)
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    return data.secure_url
  }

  // Add or Edit project
  const saveProject = () => {
    if (!projectForm.title || !projectForm.description) {
      alert('Title and Description are required!')
      return
    }
    if (editingProject) {
      API.put(`/api/projects/${editingProject}`, projectForm)
        .then(res => {
          setProjects(projects.map(p => p._id === editingProject ? res.data : p))
          setProjectForm({ title: '', description: '', githubLink: '', liveLink: '', image: '' })
          setEditingProject(null)
          alert('Project updated!')
        })
        .catch(err => alert('Error: ' + err.response.data.message))
    } else {
      API.post('/api/projects', projectForm)
        .then(res => {
          setProjects([...projects, res.data])
          setProjectForm({ title: '', description: '', githubLink: '', liveLink: '', image: '' })
          alert('Project added!')
        })
        .catch(err => alert('Error: ' + err.response.data.message))
    }
  }

  // Delete project
  const deleteProject = (id) => {
    if(window.confirm('Are you sure you want to delete this project?')) {
      API.delete(`/api/projects/${id}`)
        .then(() => setProjects(projects.filter(p => p._id !== id)))
    }
  }

  // Edit project
  const startEditProject = (project) => {
    setProjectForm({
      title: project.title,
      description: project.description,
      githubLink: project.githubLink,
      liveLink: project.liveLink,
      image: project.image
    })
    setEditingProject(project._id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Add or Edit certificate
  const saveCertificate = async () => {
    if (!certForm.name || !certForm.issuer || !certForm.date) {
      alert('Name, Issuer and Date are required!')
      return
    }
    setUploading(true)
    try {
      let imageUrl = certForm.image
      if (certImageFile) {
        imageUrl = await uploadImage(certImageFile)
      }
      const certData = { ...certForm, image: imageUrl }
      if (editingCert) {
        const res = await API.put(`/api/certificates/${editingCert}`, certData)
        setCertificates(certificates.map(c => c._id === editingCert ? res.data : c))
        setEditingCert(null)
        alert('Certificate updated!')
      } else {
        const res = await API.post('/api/certificates', certData)
        setCertificates([...certificates, res.data])
        alert('Certificate added!')
      }
      setCertForm({ name: '', issuer: '', date: '', link: '', image: '' })
      setCertImageFile(null)
    } catch (err) {
      alert('Error saving certificate!')
      console.log(err)
    }
    setUploading(false)
  }

  // Delete certificate
  const deleteCertificate = (id) => {
    if(window.confirm('Are you sure you want to delete this certificate?')) {
      API.delete(`/api/certificates/${id}`)
        .then(() => setCertificates(certificates.filter(c => c._id !== id)))
    }
  }

  // Edit certificate
  const startEditCert = (cert) => {
    setCertForm({
      name: cert.name,
      issuer: cert.issuer,
      date: cert.date,
      link: cert.link || '',
      image: cert.image || ''
    })
    setEditingCert(cert._id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Login Page
  if(!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl border border-gray-700">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🔐</div>
            <h2 className="text-2xl font-bold mb-1">Admin <span className="text-blue-400">Login</span></h2>
            <p className="text-gray-400 text-sm">Enter password to access admin panel</p>
          </div>
          <input
            type="password"
            placeholder="Enter admin password"
            className="w-full bg-gray-700 rounded-lg px-4 py-3 mb-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
            onChange={e => setPassword(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleLogin()}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition"
          >
            Login →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-12">
      <div className="flex justify-between items-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">Admin <span className="text-blue-400">Panel</span></h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition"
        >
          Logout
        </button>
      </div>

      {/* Add/Edit Project */}
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">
          {editingProject ? '✏️ Edit Project' : '➕ Add Project'}
        </h2>
        <input className="w-full bg-gray-700 rounded-lg px-4 py-3 mb-4 text-white outline-none" placeholder="Title" value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} />
        <textarea rows="3" className="w-full bg-gray-700 rounded-lg px-4 py-3 mb-4 text-white outline-none" placeholder="Description" value={projectForm.description} onChange={e => setProjectForm({...projectForm, description: e.target.value})} />
        <input className="w-full bg-gray-700 rounded-lg px-4 py-3 mb-4 text-white outline-none" placeholder="GitHub Link" value={projectForm.githubLink} onChange={e => setProjectForm({...projectForm, githubLink: e.target.value})} />
        <input className="w-full bg-gray-700 rounded-lg px-4 py-3 mb-4 text-white outline-none" placeholder="Live Link" value={projectForm.liveLink} onChange={e => setProjectForm({...projectForm, liveLink: e.target.value})} />
        <div className="flex gap-3">
          <button onClick={saveProject} className="flex-1 bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold">
            {editingProject ? 'Update Project' : 'Add Project'}
          </button>
          {editingProject && (
            <button onClick={() => { setEditingProject(null); setProjectForm({ title: '', description: '', githubLink: '', liveLink: '', image: '' }) }}
              className="bg-gray-600 hover:bg-gray-500 px-6 py-3 rounded-lg font-semibold">
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Manage Projects */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Manage Projects</h2>
        {projects.map(project => (
          <div key={project._id} className="bg-gray-800 rounded-xl p-4 mb-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description.substring(0, 60)}...</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEditProject(project)} className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-sm">Edit</button>
              <button onClick={() => deleteProject(project._id)} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Certificate */}
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">
          {editingCert ? '✏️ Edit Certificate' : '➕ Add Certificate'}
        </h2>
        <input className="w-full bg-gray-700 rounded-lg px-4 py-3 mb-4 text-white outline-none" placeholder="Certificate Name" value={certForm.name} onChange={e => setCertForm({...certForm, name: e.target.value})} />
        <input className="w-full bg-gray-700 rounded-lg px-4 py-3 mb-4 text-white outline-none" placeholder="Issuer" value={certForm.issuer} onChange={e => setCertForm({...certForm, issuer: e.target.value})} />
        <input className="w-full bg-gray-700 rounded-lg px-4 py-3 mb-4 text-white outline-none" placeholder="Date (ex: June 2024)" value={certForm.date} onChange={e => setCertForm({...certForm, date: e.target.value})} />

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Certificate Image</label>
          {certForm.image && (
            <img src={certForm.image} alt="current" className="w-32 h-20 object-cover rounded-lg mb-2" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={e => setCertImageFile(e.target.files[0])}
            className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white outline-none"
          />
          {certImageFile && (
            <p className="text-green-400 text-sm mt-2">✅ {certImageFile.name} selected</p>
          )}
        </div>

        <div className="flex gap-3">
          <button onClick={saveCertificate} disabled={uploading}
            className="flex-1 bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold disabled:opacity-50">
            {uploading ? 'Uploading...' : editingCert ? 'Update Certificate' : 'Add Certificate'}
          </button>
          {editingCert && (
            <button onClick={() => { setEditingCert(null); setCertForm({ name: '', issuer: '', date: '', link: '', image: '' }) }}
              className="bg-gray-600 hover:bg-gray-500 px-6 py-3 rounded-lg font-semibold">
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Manage Certificates */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Manage Certificates</h2>
        {certificates.map(cert => (
          <div key={cert._id} className="bg-gray-800 rounded-xl p-4 mb-4 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              {cert.image && <img src={cert.image} alt={cert.name} className="w-16 h-16 object-cover rounded-lg" />}
              <div>
                <h3 className="font-bold">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEditCert(cert)} className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-sm">Edit</button>
              <button onClick={() => deleteCertificate(cert._id)} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin