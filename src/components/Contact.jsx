import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-intro">
          Looking for a MERN Stack Developer opportunity? I am available for internship and
          fresher full-time roles with immediate interview readiness.
        </p>
        <div className="contact-hero-grid">
          <article className="contact-card contact-primary-card">
            <p className="contact-kicker">Hiring Snapshot</p>
            <h3>MERN Stack Developer Candidate</h3>
            <p className="contact-card-intro">
              Targeting React.js, Node.js, Express.js, and MongoDB opportunities.
            </p>

            <ul className="contact-list">
              <li className="contact-line"><strong>Status</strong><span>Immediate Joiner</span></li>
              <li className="contact-line"><strong>Experience Level</strong><span>Fresher / Entry-Level</span></li>
              <li className="contact-line"><strong>Interview Readiness</strong><span>Available this week</span></li>
            </ul>

            <div className="contact-actions card-footer">
              <a className="btn primary" href="mailto:ayushbhavsar70@gmail.com">
                Email for Interview
              </a>
              <a className="btn ghost" href="tel:+919913828214">
                Call Now
              </a>
            </div>
          </article>

          <article className="contact-card contact-info-card">
            <h3>Contact Information</h3>
            <p className="contact-card-intro">
              Fastest response through email and phone.
            </p>
            <ul className="contact-detail-list">
              <li>
                <span className="contact-detail-label">Phone</span>
                <a href="tel:+919913828214">+91 99138 28214</a>
              </li>
              <li>
                <span className="contact-detail-label">Email</span>
                <a href="mailto:ayushbhavsar70@gmail.com">ayushbhavsar70@gmail.com</a>
              </li>
              <li>
                <span className="contact-detail-label">Location</span>
                <span>Kapadwanj, Gujarat, India</span>
              </li>
              <li>
                <span className="contact-detail-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/ayushbhavsar5" target="_blank" rel="noreferrer">
                  linkedin.com/in/ayushbhavsar5
                </a>
              </li>
              <li>
                <span className="contact-detail-label">GitHub</span>
                <a href="https://github.com/ayushbhavsar210" target="_blank" rel="noreferrer">
                  github.com/ayushbhavsar210
                </a>
              </li>
            </ul>
          </article>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <h3>Why Hire Me</h3>
            <p className="contact-card-intro">
              Practical contribution across frontend, backend, and database layers.
            </p>

            <ul className="contact-list">
<<<<<<< HEAD
              <li>English</li>
              <li>Hindi </li>
              <li>Gujarati (Native)</li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1_i7CsbgtMZqX5t6BP9qyXpoyqsjovGjG/view?usp=sharing"
              className="btn primary full-width"
=======
              <li className="contact-line"><strong>Technical Match</strong><span>React.js, Node.js, Express.js, MongoDB, REST APIs</span></li>
              <li className="contact-line"><strong>Delivery</strong><span>Authentication, CRUD modules, and admin workflows</span></li>
              <li className="contact-line"><strong>Work Style</strong><span>Clean code, Git workflow, and API testing with Postman</span></li>
            </ul>

            <Link className="btn ghost full-width card-footer" to="/projects">
              View Project Proof
            </Link>
          </article>

          <article className="contact-card">
            <h3>Resume and Availability</h3>
            <p className="contact-card-intro">
              Ready to join and contribute to production projects.
            </p>
            <ul className="contact-list">
              <li className="contact-line"><strong>Availability</strong><span>Immediate / Notice Period: 0 days</span></li>
              <li className="contact-line"><strong>Preferred Roles</strong><span>MERN Stack, React, Node.js</span></li>
              <li className="contact-line"><strong>Work Type</strong><span>On-site, Hybrid, Remote</span></li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1I5Rww7ZndM9K99mo6A2nfZWGz_0D2mWq/view?usp=sharing"
              className="btn primary full-width card-footer"
>>>>>>> fbedd25 (changes in User InterFace)
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
<<<<<<< HEAD
           
          </div>
=======
            <p className="resume-note">
              I usually reply within 24 hours for job and interview communication.
            </p>
          </article>
>>>>>>> fbedd25 (changes in User InterFace)
        </div>
      </div>
    </section>
  )
}

export default Contact
