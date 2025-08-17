'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'
import { contact, projects as siteProjects, experience as siteExperience, education as siteEducation, allSkillsFromProjects, findProjects } from '@/data/portfolio'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const CV_PATH = contact.cvPath

const Chatbot = () => {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([{
    id: 'm1',
    role: 'assistant',
    content: "Hi! I'm your portfolio assistant. Ask me about projects, experience, skills, contact info, or download your CV.",
  }])
  const endRef = useRef<HTMLDivElement | null>(null)

  const kb = useMemo(() => ({
    owner: contact.owner,
    email: contact.email,
    phone: contact.phone,
    location: contact.location,
    linkedin: contact.linkedin,
    github: contact.github,
    cv: CV_PATH,
    projects: siteProjects.map(p => ({
      name: p.title,
      year: p.period,
      category: p.category,
      summary: p.description,
      tags: p.technologies,
      github: p.github,
      live: p.live,
    })),
    experience: siteExperience,
    skills: allSkillsFromProjects(),
    education: siteEducation,
  }), [])

  const suggest = useMemo(() => [
    'Download CV',
    'How to contact you?',
    'Tell me about BrandOrbAI',
    'List your projects',
    'What are your skills?',
    'Show your experience',
    'Show education',
    'Open LinkedIn',
    'Open GitHub',
    'Go to Projects',
    'Go to Contact',
    'Toggle theme',
  "What's your name?",
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
    if (/what['’`]?s your name|whats your name|your name|who are you/.test(s)) {
      return `I'm the Menfolio Assistant for ${kb.owner}. I can help you explore the portfolio and find the CV.`
    }
    if (/project|brandorb|menfolio|slam|secure|autofy|bank|line follower/.test(s)) {
      const foundList = findProjects(s)
      const mapIt = (arr: typeof siteProjects) => arr.slice(0, 5).map(p => `• ${p.title} (${p.category}, ${p.period}) – ${p.description}`).join('\n')
      return foundList.length ? mapIt(foundList) : mapIt(siteProjects)
    }
    if (/skill|stack|tech/.test(s)) {
      return `Core skills: ${kb.skills.join(', ')}`
    }
    if (/experience|work|intern/.test(s)) {
      return kb.experience.map(e => `• ${e.role} at ${e.company} – ${e.period}. ${e.details}`).join('\n')
    }
    if (/education|school|ensi/.test(s)) {
      return kb.education.map((e: any) => `• ${e.degree} — ${e.institution} (${e.period})`).join('\n')
    }
    if (/where|location|based/.test(s)) {
      return `I'm based in ${kb.location}.`
    }
    if (/available|availability|hire|hiring/.test(s)) {
      return 'Open to discussing internships and collaborations. Feel free to reach out via email or LinkedIn.'
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

  const goToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleQuick = (label: string) => {
    switch (label) {
      case 'Download CV':
        window.open(kb.cv, '_blank')
        setMessages(m => [...m, { id: crypto.randomUUID(), role: 'user', content: label }, { id: crypto.randomUUID(), role: 'assistant', content: `Opening CV… If it doesn’t open, use this link: ${kb.cv}` }])
        return
      case 'Open LinkedIn':
        window.open(kb.linkedin, '_blank')
        setMessages(m => [...m, { id: crypto.randomUUID(), role: 'user', content: label }, { id: crypto.randomUUID(), role: 'assistant', content: `Opening LinkedIn: ${kb.linkedin}` }])
        return
      case 'Open GitHub':
        window.open(kb.github, '_blank')
        setMessages(m => [...m, { id: crypto.randomUUID(), role: 'user', content: label }, { id: crypto.randomUUID(), role: 'assistant', content: `Opening GitHub: ${kb.github}` }])
        return
      case 'Go to Projects':
        goToSection('projects')
        setMessages(m => [...m, { id: crypto.randomUUID(), role: 'user', content: label }, { id: crypto.randomUUID(), role: 'assistant', content: 'Navigating to Projects…' }])
        return
      case 'Go to Contact':
        goToSection('contact')
        setMessages(m => [...m, { id: crypto.randomUUID(), role: 'user', content: label }, { id: crypto.randomUUID(), role: 'assistant', content: 'Navigating to Contact…' }])
        return
      case 'Toggle theme':
        toggleTheme()
        setMessages(m => [...m, { id: crypto.randomUUID(), role: 'user', content: label }, { id: crypto.randomUUID(), role: 'assistant', content: 'Toggled theme.' }])
        return
      default:
        send(label)
        return
    }
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
              <button key={i} onClick={() => handleQuick(s)} className={`text-xs px-2 py-1 rounded-full border ${ theme === 'dark' ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100' }`}>{s}</button>
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
