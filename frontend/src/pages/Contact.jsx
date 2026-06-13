import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sending, setSending] = useState(false)

  const handleSubmit = () => {
    if(!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields!')
      return
    }

    setSending(true)

    emailjs.send(
      'service_n8ei4d6',
      'template_9qawcrp',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'vNUzQ000Voe8xyukH'
    )
    .then(() => {
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setSending(false)
    })
    .catch(() => {
      alert('Failed to send message. Please try again!')
      setSending(false)
    })
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact <span className="text-blue-400">Me</span></h1>
      
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8">
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email"
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Message</label>
          <textarea
            rows="5"
            value={formData.message}
            className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message"
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={sending}
          className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition disabled:opacity-50"
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </div>
  )
}

export default Contact