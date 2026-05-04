import React from 'react'
import autoxImg from '../assets/autox.jpg'
import bloomImg from '../assets/bloom.jpg'
import hdFoodImg from '../assets/hd food.png'
import quizImg from '../assets/quiz-web.png'

const projects = [
  {
    title: 'AutoX - Garage & Service Management System',
    tech: 'MongoDB, Express.js, React.js, Node.js, Razorpay API',
    roleTag: 'Full-Stack Developer',
    impact: 'Garage Service Platform | Payment Integration',
    image: autoxImg,
    link: 'https://auto-x-smart-garage-service.vercel.app/',
    isLive: true,
    summary: 'Full-stack garage service platform for managing vehicle services and bookings with integrated payment processing.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay', 'OTP Auth'],
    bulletPoints: [
      'Developed full-stack garage service platform for vehicle service management and bookings',
      'Implemented OTP-based authentication system for secure user registration and login',
      'Built service modules: general service, breakdown assistance, and vehicle modification',
      'Integrated Razorpay payment gateway for seamless and secure online transactions',
      'Designed comprehensive admin dashboard for bookings, mechanics, vehicles, and spare parts',
      'Developed RESTful APIs for service workflows and user operations',
      'Structured MongoDB collections for efficient data handling and performance optimization',
      'Focused on real-world scalability and service management logic',
    ],
  },
  {
    title: 'Bloom Heaven - Plantation Management System',
    tech: 'MERN Stack, Razorpay API, AI Integration',
    roleTag: 'Full-Stack Developer',
    impact: 'Plantation Platform | AI-Powered | Smart Agriculture',
    image: bloomImg,
    link: 'https://github.com/ayushbhavsar210/bloom-heaven-plantation-management.git',
    summary: 'MERN plantation platform with AI-based plant health detection, payment integration, and subscription management.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Razorpay', 'AI/ML', 'Real-time Chat'],
    bulletPoints: [
      'Built plantation platform providing plant sales, plantation services, and subscription packages (Silver, Gold, Diamond)',
      'Implemented secure OTP-based authentication system for user security',
      'Integrated Razorpay payment gateway for product and service transactions',
      'Developed AI-based plant health checker to detect plant diseases and health conditions',
      'Created admin panel to manage staff, bookings, and operational activities',
      'Implemented real-time chat system between admin and staff',
      'Designed REST APIs and managed complex MongoDB relationships',
      'Focused on automation, usability, and smart agriculture solutions',
    ],
  },
  {
    title: 'HD Food Catering Service System',
    tech: 'MERN Stack, Razorpay API',
    roleTag: 'Full-Stack Developer',
    impact: 'Catering Platform | Service Management',
    image: hdFoodImg,
    link: 'https://github.com/ayushbhavsar210/hd-food-catering-management-system.git',
    summary: 'Full-stack catering service platform offering ready-made food, live catering, and venue services with secure payments.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay', 'Service APIs'],
    bulletPoints: [
      'Developed catering service platform offering ready-made food, live catering, and venue services',
      'Implemented user features for booking services and selecting customized menu options',
      'Integrated Razorpay payment gateway for secure booking payments',
      'Built admin dashboard to manage bookings, menu items, and venue details',
      'Developed RESTful APIs for order and service management',
      'Ensured seamless frontend-backend integration using React.js and Node.js',
      'Focused on performance and user-friendly experience',
    ],
  },
  {
    title: 'Quiz Web Application (MEAN-Based Project)',
    tech: 'Node.js, Express.js, MongoDB, HTML, CSS',
    roleTag: 'Backend + API Development',
    impact: 'Authentication | Role-Based Access',
    image: quizImg,
    link: 'https://github.com/Dhairya-77/quiz-web-application',
    summary: 'Full-stack quiz management system built for secure user authentication, role-based access, and scalable quiz workflows.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS'],
    bulletPoints: [
      'Built a full-stack quiz management system using the MEAN stack with secure user authentication',
      'Designed and developed RESTful APIs for user login, quiz creation, quiz participation, and result management',
      'Implemented role-based access control for admin and users to manage quizzes and questions',
      'Structured MongoDB collections for users, quizzes, questions, and results to ensure efficient data retrieval',
      'Applied password hashing and validation techniques to enhance application security',
      'Focused on scalable backend logic, clean API architecture, and maintainable code structure',
    ],
  },
]

const Projects = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-intro">
          Strong project portfolio for MERN Stack, React, and Node.js roles with practical backend
          implementation and production-style architecture decisions.
        </p>

        <div className="projects-intro-grid">
          <article className="project-card project-highlight-card">
            <p className="project-kicker">Recruiter Snapshot</p>
            <h3>What I Bring to a MERN Team</h3>
            <p className="project-summary">
              Hands-on experience with authentication flows, RESTful API development, database
              integration, and responsive UI implementation. I focus on shipping clean, testable,
              and scalable code.
            </p>
            <div className="project-metrics">
              <span className="metric-pill">4+ Product-Based Projects</span>
              <span className="metric-pill">API + Database Integration</span>
              <span className="metric-pill">MERN Role Ready</span>
            </div>
          </article>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <p className="project-kicker">{project.roleTag}</p>
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-summary">{project.summary}</p>
                <p className="project-impact">{project.impact}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-chip">{item}</span>
                  ))}
                </div>
                <ul className="project-points">
                  {project.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.link ? (
                    <a
                      className="btn project-btn"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.isLive ? 'View Live Project' : 'View GitHub Repository'}
                    </a>
                  ) : (
                    <span className="link-secondary">Code available on request</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
