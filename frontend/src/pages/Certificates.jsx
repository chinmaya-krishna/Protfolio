import React, { useEffect, useState } from 'react'
import API from '../api'

function Certificates() {
  const [certificates, setCertificates] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    API.get('/api/certificates')
      .then(res => setCertificates(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Certificates</span></h1>
      <p className="text-gray-400 text-center mb-12">Click on a certificate to view it fully</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificates.map(cert => (
          <div
            key={cert._id}
            onClick={() => setSelected(cert)}
            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition cursor-pointer hover:scale-105"
          >
            {cert.image ? (
              <img src={cert.image} alt={cert.name} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-5xl">🏆</span>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
              <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image */}
            {selected.image ? (
              <img src={selected.image} alt={selected.name} className="w-full max-h-[70vh] object-contain bg-black" />
            ) : (
              <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-7xl">🏆</span>
              </div>
            )}

            {/* Modal Info */}
            <div className="p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{selected.name}</h3>
                <p className="text-blue-400">{selected.issuer}</p>
                <p className="text-gray-500 text-sm">{selected.date}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg transition"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {certificates.length === 0 && (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-5xl mb-4">🎓</p>
          <p>No certificates added yet!</p>
        </div>
      )}
    </div>
  )
}

export default Certificates