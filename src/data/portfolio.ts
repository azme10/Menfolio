export interface Project {
  title: string
  period: string
  description: string
  technologies: string[]
  category: string
  color: 'cyan' | 'blue' | 'purple' | 'green' | 'orange' | 'red'
  highlights: string[]
  featured?: boolean
  github?: string
  live?: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  details: string
  tags?: string[]
}

export const owner = 'Mohamed Aziz MENSI'
export const contact = {
  owner,
  email: 'mohamedaziz.mensi@ensi-uma.tn',
  phone: '+216 90 06 61 82',
  location: 'Tunis, Tunisia',
  linkedin: 'https://www.linkedin.com/in/aziz-mensi-44945727a/',
  github: 'https://github.com/azme10',
  cvPath: process.env.NEXT_PUBLIC_CV_URL || '/cv/aziz-mensi-cv.pdf',
}

export const projects: Project[] = [
  {
    title: 'BrandOrbAI — AI Branding Platform',
    period: '2025',
    description:
      'An end-to-end AI-powered platform to discover, define, and orchestrate brand identity. Integrates modular AI agents for brand discovery, identity creation, market and competitor analysis, financial assessment, investor insights, social media strategy (LinkedIn, TikTok), and legal opportunities.',
    technologies: [
      'FastAPI','Pydantic','Uvicorn','Requests','HTTPX','LangGraph','LangChain (Groq)','OpenAI','Google Generative AI','Groq','Tavily','Apify Client','python-dotenv','python-jose','passlib','python-multipart','python-magic','Pillow','WebSockets','Streamlit','ONNX Runtime','OpenCV','scikit-image','scikit-learn','SciPy','NumPy','Next.js','React','TypeScript','TailwindCSS','PostCSS','Radix UI','Lucide','Geist','Tabler Icons','Sonner','Vaul','Framer Motion','Lottie','Recharts','React Leaflet','Leaflet','Firebase','Zod','ESLint','date-fns','clsx','class-variance-authority','Git','JSON','Social Media APIs'
    ],
    category: 'AI Platform',
    color: 'purple',
    highlights: [
      'Modular agent architecture for branding, market analysis, finance, and social media',
      'Brand discovery and identity creation with automated logo/asset generation',
      'Market & competitor analysis with investor-grade insights',
      'Automated social media strategy and content for LinkedIn & TikTok',
      'JSON-backed data layer with external API integrations',
      'Secure auth, file handling, and real-time updates via WebSockets'
    ],
    featured: true
  },
  {
    title: 'Menfolio - Personal Portfolio',
    period: 'Aug 2025 - Present',
    description:
      'A modern, responsive personal portfolio website built with Next.js 15 and React 19, featuring dark/light themes, 3D animations, and interactive components. Showcases professional experience, education, and projects with cutting-edge web technologies.',
    technologies: ['Next.js 15','React 19','TypeScript','Tailwind CSS','GSAP','Three.js','Framer Motion'],
    category: 'Web Development',
    color: 'cyan',
    highlights: [
      'Modern Next.js 15 with app directory structure',
      'Interactive 3D profile card with tilt effects',
      'Animated navigation with GSAP morphing',
      'Responsive dark/light theme system',
      'Professional contact form integration',
      'Smooth animations and micro-interactions'
    ],
    featured: true,
    github: 'https://github.com/azme10/menfolio',
    live: 'http://localhost:3000'
  },
  {
    title: 'R2C-SLAM',
    period: 'Jan 2025 - May 2025',
    description:
      'Designed and implemented a real-time collaborative SLAM system using ROS 2, enabling two low-cost mobile robots to map and navigate environments jointly through robust inter-robot communication and sensor fusion.',
    technologies: ['ROS 2','SLAM','C++','Python','Sensor Fusion'],
    category: 'Robotics',
    color: 'blue',
    highlights: [
      'Real-time collaborative mapping between multiple robots',
      'Advanced sensor fusion algorithms',
      'Inter-robot communication protocols',
      'Low-cost hardware implementation'
    ]
  },
  {
    title: 'Secure Entry',
    period: 'Feb 2024 - May 2024',
    description:
      'Developed an integrated facial recognition access system for ENSI Robotics Association using C/C++, Python, and ESP32, enabling secure entry, equipment control, and real-time resource synchronization.',
    technologies: ['C/C++','Python','ESP32','Facial Recognition','Computer Vision','IoT'],
    category: 'Embedded Systems',
    color: 'purple',
    highlights: [
      'Facial recognition access control system',
      'ESP32-based hardware integration',
      'Real-time resource synchronization',
      'Secure equipment control mechanisms'
    ]
  },
  {
    title: 'AUTOFY',
    period: 'Jan 2024 - May 2024',
    description:
      'A web-based application developed using HTML, CSS, JavaScript, and PHP, designed to sell and rent cars online with a comprehensive management system.',
    technologies: ['HTML','CSS','JavaScript','PHP','MySQL','Web Development'],
    category: 'Web Development',
    color: 'green',
    highlights: [
      'Full-stack web application',
      'Car sales and rental platform',
      'Database management system',
      'User-friendly interface design'
    ]
  },
  {
    title: 'Bank Simulation',
    period: 'Oct 2023 - Dec 2023',
    description:
      'A C++ application designed to mimic the operations and interactions within a real bank environment, implementing complex financial algorithms and data structures.',
    technologies: ['C++','Object-oriented Programming','Data Structures','Algorithms'],
    category: 'Software Development',
    color: 'orange',
    highlights: [
      'Complex banking operations simulation',
      'Advanced C++ programming techniques',
      'Financial algorithms implementation',
      'Real-world system modeling'
    ]
  },
  {
    title: 'Line Follower Robot',
    period: 'Dec 2023 - May 2024',
    description:
      'Designed a competitive line-following robot with PID control and encoders for precise and stable navigation on complex tracks.',
    technologies: ['Arduino','C/C++','PID Control','Sensors','Robotics'],
    category: 'Robotics',
    color: 'red',
    highlights: [
      'PID control implementation',
      'Encoder-based navigation',
      'Competitive robot design',
      'Complex track navigation'
    ]
  }
]

export const experience: ExperienceItem[] = [
  {
    role: 'AI Intern',
    company: 'Talan',
    period: 'Jul 2025 – Aug 30, 2025',
    details:
      'Built BrandOrbAI, an AI-powered branding platform with modular agents, FastAPI backend, and a polished Next.js frontend.',
    tags: ['FastAPI','LangGraph','OpenAI','Groq','Tavily','Apify','WebSockets','Next.js','Tailwind','Framer Motion']
  },
  {
    role: 'Machine Learning Research Intern',
    company: 'LARODEC-ISG',
    period: 'Jun 2024 – Aug 2024',
    details: 'Real-time fraud detection in credit card transactions using advanced machine learning techniques.',
    tags: ['Python','ML','Anomaly Detection','Data Analysis']
  }
]

export const education = [
  { degree: 'Computer Science Engineering', institution: 'ENSI - National School of Computer Science', period: '2023 - Present' },
  { degree: 'Mathematics Physics', institution: 'IPEIT - Preparatory Institute for Engineering Studies in Tunis', period: '2021 - 2023' },
  { degree: 'Mathematics Baccalaureate', institution: 'HAMMEM-LIF High School', period: '2017 - 2021' },
]

export const allSkillsFromProjects = (): string[] => {
  const set = new Set<string>()
  for (const p of projects) for (const t of p.technologies) set.add(t)
  return Array.from(set).sort()
}

export const findProjects = (query: string): Project[] => {
  const s = query.toLowerCase()
  return projects.filter(p =>
    p.title.toLowerCase().includes(s) ||
    p.category.toLowerCase().includes(s) ||
    p.technologies.some(t => t.toLowerCase().includes(s))
  )
}
