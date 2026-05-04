import React from 'react'
import autoxImg from '../assets/autox.jpg'
import bloomImg from '../assets/bloom.jpg'
import hdFoodImg from '../assets/hd food.png'
import quizImg from '../assets/quiz-web.png'

const projects = [
  {
    title: 'AutoX - Smart Garage Service',
    tech: 'React, Node.js, Firebase',
    roleTag: 'Full-Stack Developer',
    impact: 'Live Production Site | Booking & Services',
    image: autoxImg,
    link: 'https://auto-x-smart-garage-service.vercel.app/',
    isLive: true,
    summary: 'A smart garage service site with booking flows and service management.',
    stack: ['React', 'Firebase/Auth', 'Responsive UI'],
    bulletPoints: [
      'Implemented responsive service listings and booking UI',
      'Connected authentication and booking persistence with Firebase',
      'Deployed as a responsive production site on Vercel',
    ],
  },
  {
    title: 'Bloome Heaven - Plantation Management',
    tech: 'React, MongoDB, Express',
    roleTag: 'Frontend + Backend',
    impact: 'Plantation Management | Inventory',
    image: bloomImg,
    link: 'https://github.com/ayushbhavsar210/bloom-heaven-plantation-management.git',
    summary: 'Plantation management system for nursery and inventory tracking.',
    stack: ['React', 'Node.js', 'MongoDB'],
    bulletPoints: [
      'Built inventory and plantation management UI with CRUD features',
      'Implemented backend APIs and data persistence with MongoDB',
    ],
  },
  {
    title: 'HD Food Catering Management',
    tech: 'React, Node.js',
    roleTag: 'Full-Stack',
    impact: 'Order Management | Catering Workflows',
    image: hdFoodImg,
    link: 'https://github.com/ayushbhavsar210/hd-food-catering-management-system.git',
    summary: 'Catering management system for orders and menu management.',
    stack: ['React', 'Node.js', 'CRUD'],
    bulletPoints: [
      'Created menu listing, ordering, and admin order management flows',
      'Integrated backend endpoints for order processing',
    ],
  },
  {
    title: 'Quiz Web Application',
    tech: 'Node.js, Express.js, MongoDB',
    roleTag: 'Backend + API Development',
    impact: 'Authentication | Role-Based Access',
    image: quizImg,
    link: 'https://github.com/Dhairya-77/quiz-web-application',
    summary: 'MERN-style backend project focused on authentication and quiz management.',
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    bulletPoints: [
      'APIs for quiz creation, user auth, and result tracking',
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
              <span className="metric-pill">3+ Production-Style Projects</span>
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
