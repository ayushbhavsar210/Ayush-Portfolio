import React from 'react'
import quizImg from '../assets/quiz-web.png'
import expenseImg from '../assets/expense-tracker.jpg'
import travelImg from '../assets/tour-travel.jpg'

const projects = [
  {
    title: 'Quiz Web Application',
    tech: 'HTML, CSS, Node.js, Express.js, MongoDB',
    image: quizImg,
    link: 'https://github.com/Dhairya-77/quiz-web-application',
    bulletPoints: [
      'Login-based quiz platform with timer and real-time result calculation',
      'REST APIs for user authentication, quiz creation, and result tracking',
      'Admin panel to manage users, questions, and quizzes',
      'Secure password hashing and MongoDB for persistent storage',
    ],
  },
  {
    title: 'Expense Tracker App',
    tech: 'Flutter, Dart, Sqflite',
    image: expenseImg,
    link: 'https://github.com/ayushbhavsar210/Expence-Tracker-App',
    bulletPoints: [
      'Mobile app to track daily expenses with clean and responsive UI',
      'Local storage with sqflite for offline functionality',
      'Category-wise expense filtering and visual summaries using pie charts',
    ],
  },
  {
    title: 'Online Tour & Travel Agency System',
    tech: 'ASP.NET, MySQL',
    image: travelImg,
    link: '',
    bulletPoints: [
      'Full-stack travel booking system with user login and admin panel',
      'Dynamic travel packages, booking flow, and contact support',
      'Relational DB schema for users, packages, inquiries, and bookings',
      'Session handling for secure access control and email confirmations',
    ],
  },
]

const Projects = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-intro">
          Real projects where I applied full-stack concepts to solve practical problems.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <ul>
                  {project.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    className="btn project-btn"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
