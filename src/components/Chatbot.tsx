'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const CV_PATH = process.env.NEXT_PUBLIC_CV_URL || '/cv/aziz-mensi-cv.pdf'

const Chatbot = () => {
  const { theme } = useTheme()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([{
    id: 'm1',
    role: 'assistant',
    content: "Hi! I'm your portfolio assistant. Ask me about projects, experience, skills, contact info, or download your CV.",
  }])
  const endRef = useRef<HTMLDivElement | null>(null)

  const kb = useMemo(() => ({
    owner: 'Mohamed Aziz MENSI',
    email: 'mohamedaziz.mensi@ensi-uma.tn',
    phone: '+216 90 06 61 82',
    location: 'Tunis, Tunisia',
    linkedin: 'https://www.linkedin.com/in/aziz-mensi-44945727a/',
    github: 'https://github.com/azme10',
    cv: CV_PATH,
    projects: [
      {
        name: 'BrandOrbAI — AI Branding Platform',
        year: '2025',
        category: 'AI Platform',
        summary: 'End-to-end AI platform with modular agents for branding, market analysis, finance, and social media.',
        tags: ['FastAPI','LangGraph','OpenAI','Groq','Next.js','Tailwind','Framer Motion']
      },
      {
        name: 'Menfolio - Personal Portfolio',
        year: '2025',
        category: 'Web Development',
        summary: 'Next.js 15 + React 19 portfolio with dark/light themes and animations.',
        tags: ['Next.js','React','TypeScript','Tailwind','GSAP','Three.js']
      },
      {
        name: 'R2C-SLAM',
        year: '2025',
        category: 'Robotics',
        summary: 'Real-time collaborative SLAM on ROS 2 with multi-robot sensor fusion.',
        tags: ['ROS 2','SLAM','C++','Python']
      },
      {
        name: 'Secure Entry',
        year: '2024',
        category: 'Embedded Systems',
        summary: 'ESP32 facial recognition access control with real-time sync.',
        tags: ['C/C++','Python','ESP32','Computer Vision']
      },
      {
        name: 'AUTOFY',
        year: '2024',
        category: 'Web Development',
        summary: 'Car sales and rental platform (HTML/CSS/JS/PHP).',
        tags: ['PHP','MySQL','JavaScript']
      },
      {
        name: 'Bank Simulation',
        year: '2023',
        category: 'Software Development',
        summary: 'C++ simulation of banking operations and algorithms.',
        tags: ['C++','OOP','Data Structures']
      },
      {
        name: 'Line Follower Robot',
        year: '2024',
        category: 'Robotics',
        summary: 'PID-controlled competitive line follower with encoders.',
        tags: ['Arduino','C/C++','PID','Robotics']
      }
    ],
    experience: [
      {
        role: 'AI Intern', company: 'Talan', period: 'Jul 2025 – Aug 30, 2025',
        details: 'Worked on BrandOrbAI platform: agent architecture, analysis pipelines, and UI.'
      },
      {
        role: 'Research Intern', company: 'LARODEC-ISG', period: 'Past role',
        details: 'Academic/engineering contributions.'
      }
    ],
    skills: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Three.js',
      'C/C++', 'Python', 'ROS 2', 'SLAM', 'OpenCV', 'ONNX Runtime',
      'FastAPI', 'LangChain/LangGraph', 'Firebase', 'Zod'
    ]
  }), [])

  const suggest = useMemo(() => [
    'Download CV',
    'How to contact you?',
    'Tell me about BrandOrbAI',
    'List your projects',
    'What are your skills?',
  ], [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const answer = (q: string): string => {
    const s = q.toLowerCase()
    if (/\bcv\b|\bresume\b|download/.test(s)) {
      return `You can download my CV here: ${kb.cv}`
    }
    if (/contact|email|phone|linkedin|github/.test(s)) {
      return `Contact info:\n• Email: ${kb.email}\n• Phone: ${kb.phone}\n• LinkedIn: ${kb.linkedin}\n• GitHub: ${kb.github}`
    }
    if (/project|brandorb|menfolio|slam|secure|autofy|bank|line follower/.test(s)) {
      const found = kb.projects.filter(p => s.includes(p.name.toLowerCase().split(' ')[0]) || s.includes(p.category.toLowerCase()))
      const list = (found.length ? found : kb.projects).slice(0, 5)
      return list.map(p => `• ${p.name} (${p.category}, ${p.year}) – ${p.summary}`).join('\n')
    }
    if (/skill|stack|tech/.test(s)) {
      return `Core skills: ${kb.skills.join(', ')}`
    }
    if (/experience|work|intern/.test(s)) {
      return kb.experience.map(e => `• ${e.role} at ${e.company} – ${e.period}. ${e.details}`).join('\n')
    }
    if (/education|school|ensi/.test(s)) {
      return 'Education: ENSI – National School of Computer Science (Computer Science Engineering, 2023–present). Prior: IPEIT (Math/Physics), Math Baccalaureate.'
    }
    return "I can help with projects, experience, skills, and how to contact or download the CV. Try: 'Download CV' or 'List your projects'."
  }

  const send = (text?: string) => {
    const content = (text ?? input).trim()
    if (!content) return
    const userMsg: Message = { id: crypto.randomUUID(), role: 'user', content }
    const reply: Message = { id: crypto.randomUUID(), role: 'assistant', content: answer(content) }
    setMessages(m => [...m, userMsg, reply])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 select-none">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`rounded-full shadow-lg px-4 py-3 text-sm font-medium transition-colors ${
            theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          aria-label="Open chatbot"
        >
          Chat with me
        </button>
      )}
      {open && (
        <div className={`w-80 sm:w-96 h-[28rem] rounded-xl border shadow-2xl flex flex-col overflow-hidden ${
          theme === 'dark' ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'
        }`}>
          <div className={`flex items-center justify-between px-4 py-3 ${ theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100' }`}>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-semibold">Portfolio Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot" className="opacity-70 hover:opacity-100">×</button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map(m => (
              <div key={m.id} className={`max-w-[85%] text-sm leading-relaxed whitespace-pre-wrap ${ m.role === 'user' ? 'ml-auto' : '' }`}>
                <div className={`${ m.role === 'user'
                  ? 'bg-blue-600 text-white rounded-2xl rounded-br-sm'
                  : theme === 'dark' ? 'bg-gray-800 text-gray-100 rounded-2xl rounded-bl-sm' : 'bg-gray-100 text-gray-900 rounded-2xl rounded-bl-sm'
                } px-3 py-2`}>{m.content}</div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="px-3 pb-2 flex flex-wrap gap-2">
            {suggest.map((s, i) => (
              <button key={i} onClick={() => send(s)} className={`text-xs px-2 py-1 rounded-full border ${ theme === 'dark' ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100' }`}>{s}</button>
            ))}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className={`p-3 flex items-center gap-2 ${ theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50' }`}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, CV…"
              className={`flex-1 text-sm px-3 py-2 rounded border outline-none ${
                theme === 'dark' ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300'
              }`}
            />
            <button type="submit" className="px-3 py-2 text-sm rounded bg-blue-600 hover:bg-blue-700 text-white">Send</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Chatbot
