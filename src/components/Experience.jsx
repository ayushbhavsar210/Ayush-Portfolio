import React from 'react'

const Experience = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-intro">
          Four months of hands-on MERN stack experience building real-world features around
          booking flows, authentication, payments, and scalable API-driven development.
        </p>

        <div className="experience-intro-grid">
          <article className="exp-card exp-highlight-card">
            <p className="exp-kicker">Internship Snapshot</p>
            <h3>MERN Stack Developer Intern</h3>
            <p className="exp-company">Dream IT Infotech Pvt Ltd</p>
            <p className="exp-duration">01/2026 - 05/2026 | Anand, Gujarat | 4 Months</p>
            <div className="exp-metrics">
              <span className="exp-metric">Full-Stack MERN Delivery</span>
              <span className="exp-metric">OTP Authentication</span>
              <span className="exp-metric">Razorpay Integration</span>
              <span className="exp-metric">MongoDB Schema Design</span>
            </div>
          </article>
        </div>

        <div className="experience-timeline">
          <article className="exp-item timeline-card">
            <div className="exp-header">
              <div>
                <p className="exp-kicker">Role Overview</p>
                <h3>MERN Stack Developer Intern</h3>
                <p className="exp-company">Dream IT Infotech Pvt Ltd</p>
                <p className="exp-duration">Built production-style features for service management, security, and payments.</p>
              </div>
              <span className="exp-badge">4 Months</span>
            </div>

            <div className="exp-tech-stack">
              <span className="exp-tech">MongoDB</span>
              <span className="exp-tech">Express.js</span>
              <span className="exp-tech">React.js</span>
              <span className="exp-tech">Node.js</span>
              <span className="exp-tech">Razorpay</span>
              <span className="exp-tech">OTP Authentication</span>
            </div>

            <h4 className="exp-section-title">What I Delivered</h4>
            <ul className="exp-points">
              <li>Developed and maintained full-stack MERN features for booking, service, and admin workflows</li>
              <li>Designed RESTful APIs for scalable client-server communication and clean integration</li>
              <li>Built OTP-based authentication flows to strengthen user registration and login security</li>
              <li>Integrated Razorpay for secure online transactions and payment completion</li>
              <li>Designed MongoDB schemas and improved database query performance for smoother operations</li>
              <li>Collaborated on debugging, testing, and deployment improvements during the internship</li>
            </ul>

            <h4 className="exp-section-title">Impact Areas</h4>
            <ul className="exp-points">
              <li>Worked on real-world service management logic across user, mechanic, booking, and admin flows</li>
              <li>Built responsive React interfaces with clean UX patterns for production-style usage</li>
              <li>Maintained secure backend endpoints with validation and error handling</li>
              <li>Participated in code reviews, testing, and application performance improvements</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
