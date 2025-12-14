import React from 'react'
import profileImg from '../assets/ayush-profile.jpg'

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-kicker">MCA Fresher • Full-Stack Developer</p>
          <h1>Hi, I'm <span>Ayush Bhavsar</span></h1>
          <p className="hero-subtitle">
            I build clean, responsive web and mobile applications using modern technologies
            like React, Node.js, ASP.NET, Flutter, MongoDB and MySQL.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn ghost">Contact Me</a>
            <a
              className="btn outline"
              href="https://github.com/ayushbhavsar210"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="hero-meta">
            <span>📍 Kapadwanj, Gujarat</span>
            <span>📧 ayushbhavsar70@gmail.com</span>
            <span>📱 +91 99138 28214</span>
          </div>
        </div>
        <div className="hero-photo-wrapper">
          <div className="hero-photo-card">
            <img src={profileImg} alt="Ayush Bhavsar" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
