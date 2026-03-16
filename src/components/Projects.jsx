import React from 'react'
import quizImg from '../assets/quiz-web.png'
import expenseImg from '../assets/expense-tracker.jpg'
import travelImg from '../assets/tour-travel.jpg'

const projects = [
  {
    title: 'Quiz Web Application',
    tech: 'Node.js, Express.js, MongoDB, REST API',
    roleTag: 'Backend + API Development',
    impact: 'Authentication | Role-Based Access | Data Validation',
    image: quizImg,
    link: 'https://github.com/Dhairya-77/quiz-web-application',
    summary: 'MERN-style backend project focused on authentication, API flow, and data-driven quiz management.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT/Auth'],
    bulletPoints: [
      'Developed Node.js and Express.js APIs for authentication, quiz management, and score tracking',
      'Implemented role-based access control for admin and student workflows',
      'Integrated MongoDB collections for users, questions, quizzes, and results',
      'Used secure password hashing and input validation for safer API behavior',
    ],
  },
  {
    title: 'Expense Tracker App',
    tech: 'Frontend Architecture, CRUD, State Management',
    roleTag: 'Frontend Product Development',
    impact: 'Reusable Components | UX Flows | Data Handling',
    image: expenseImg,
    link: 'https://github.com/ayushbhavsar210/Expence-Tracker-App',
    summary: 'Personal finance tracking app demonstrating frontend architecture and CRUD feature implementation.',
    stack: ['Component Design', 'CRUD', 'Validation', 'UI State'],
    bulletPoints: [
      'Built clean UI components and state-based flows for expense management',
      'Implemented CRUD operations with category-based filtering and reporting',
      'Focused on reusable components, validation, and user-friendly interaction patterns',
    ],
  },
  {
    title: 'Online Tour & Travel Agency System',
    tech: 'ASP.NET, MySQL',
    roleTag: 'Full-Stack System Design',
    impact: 'Booking Workflow | Admin Module | Structured Schema',
    image: travelImg,
    link: '',
    summary: 'Full-stack web application with booking workflows, relational data handling, and admin operations.',
    stack: ['Authentication', 'Session Handling', 'SQL Schema', 'Form Validation'],
    bulletPoints: [
      'Designed multi-module flow for package listings, inquiries, and booking submissions',
      'Implemented authentication and session-based access for users and administrators',
      'Created structured schemas for users, packages, inquiries, and booking records',
      'Applied backend validation and secure session handling for reliability',
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
                      View GitHub Repository
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
