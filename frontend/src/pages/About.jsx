import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span></h1>

      <div className="max-w-4xl mx-auto space-y-8">

        {/* Bio */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-blue-400 mb-4">👋 Who am I?</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm <span className="text-white font-semibold">P Chinmaya Krishna Aithal</span>, a B.E. Computer Science & Design student at 
            <span className="text-blue-400"> Canara Engineering College, Mangalore</span> (2023-2027). 
            I'm passionate about full stack web development, building real-world applications, 
            and solving complex problems through clean and efficient code.
          </p>
        </div>

        {/* Education */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-blue-400 mb-6">🎓 Education</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              <div>
                <h3 className="font-bold text-white">Bachelor of Engineering — Computer Science & Design</h3>
                <p className="text-blue-400">Canara Engineering College, Mangalore</p>
                <p className="text-gray-500 text-sm">2023 — 2027</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              <div>
                <h3 className="font-bold text-white">Pre-University Course — PCMC</h3>
                <p className="text-blue-400">Govindas PU College, Surathkal</p>
                <p className="text-gray-500 text-sm">2021 — 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-blue-400 mb-6">🛠️ Technical Skills</h2>
          <div className="space-y-4">
            {[
              { category: 'Languages', skills: ['Python', 'SQL', 'JavaScript'] },
              { category: 'Web Technologies', skills: ['HTML', 'CSS', 'Bootstrap', 'React', 'Node.js', 'Express.js', 'Tailwind CSS'] },
              { category: 'Backend Framework', skills: ['Flask', 'Express.js'] },
              { category: 'Database', skills: ['MongoDB', 'PostgreSQL'] },
              { category: 'Tools', skills: ['PowerBI', 'Figma', 'VS Code', 'Git', 'GitHub', 'Docker'] },
            ].map(item => (
              <div key={item.category}>
                <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map(skill => (
                    <span key={skill} className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-blue-400 mb-6">🏆 Achievements</h2>
          <div className="space-y-4">
            {[
              { icon: '🥇', title: '1st Place — Gyantantra VTU Technical Quiz', desc: 'Secured first place in a VTU regional-level technical quiz competition.' },
              { icon: '📄', title: 'Research Paper — ICRAI 2025', desc: 'Presented a research paper on Automated Academic Timetable Generation at ICRAI-2025.' },
              { icon: '💻', title: 'HACK.IO National Hackathon', desc: 'Participated in a national-level hackathon in Bengaluru showcasing Smart Timetable Generator.' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-4 bg-gray-800/50 rounded-xl">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About