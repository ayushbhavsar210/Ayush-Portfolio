import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/ayush-profile.jpg'

const Hero = () => {
  return (
    <section className="section">
      <div className="container hero">
        <div>
          <p className="hero-kicker">MERN Stack Developer Portfolio</p>
          <h2 className="hero-title">
            Entry-level <strong>MERN Stack Developer</strong> ready for production teams
          </h2>
          <p className="hero-subtitle">
            I am Ayush Bhavsar, an MCA candidate focused on the MERN stack: React.js, Node.js,
            Express.js, and MongoDB. I build responsive frontends, RESTful APIs, authentication
            flows, and database-backed features with clean, maintainable code.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn primary">View MERN Projects</Link>
            <Link to="/contact" className="btn ghost">Interview Me</Link>
            <a
              className="btn ghost"
              href="https://github.com/ayushbhavsar210"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>
          <div className="hero-meta">
            <span>Target Role: MERN Stack Developer</span>
            <span>Core: React.js | Node.js | Express.js | MongoDB</span>
            <span>Location: Kapadwanj, Gujarat</span>
            <span>Email: ayushbhavsar70@gmail.com</span>
            <span>Phone: +91 99138 28214</span>
          </div>
        </div>
        <div className="hero-photo-frame">
          <div>
            <img src={profileImg} alt="Ayush Bhavsar" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
