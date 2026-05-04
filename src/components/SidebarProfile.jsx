import React from 'react'
import profileImg from '../assets/ayush-profile.jpg'

const SidebarProfile = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        <div className="status-pill">
          <span className="status-dot" />
          Open to MERN Developer Roles
        </div>
        <div className="sidebar-avatar-wrapper">
          <img src={profileImg} alt="Ayush Bhavsar" className="sidebar-avatar" />
        </div>
        <h1 className="sidebar-name">Ayush Bhavsar</h1>
        <p className="sidebar-tag">MERN Stack Developer Candidate | React.js, Node.js, Express.js, MongoDB</p>

        <div className="sidebar-stats">
          <div className="sidebar-stat-item">
            <strong>4+</strong>
            <span>Major Projects</span>
          </div>
          <div className="sidebar-stat-item">
            <strong>10+</strong>
            <span>API Features</span>
          </div>
          <div className="sidebar-stat-item">
            <strong>0 Days</strong>
            <span>Notice Period</span>
          </div>
        </div>

        <div className="sidebar-focus-block">
          <p className="sidebar-focus-title">Role Focus</p>
          <div className="sidebar-focus-chips">
            <span className="sidebar-focus-chip">MERN Stack Developer</span>
            <span className="sidebar-focus-chip">React Developer</span>
            <span className="sidebar-focus-chip">Node.js Developer</span>
          </div>
        </div>

        <div className="sidebar-contact">
          <div className="sidebar-contact-item">
            <span className="sidebar-contact-label">Email</span>
            <a href="mailto:ayushbhavsar70@gmail.com">ayushbhavsar70@gmail.com</a>
          </div>
          <div className="sidebar-contact-item">
            <span className="sidebar-contact-label">Phone</span>
            <a href="tel:+919913828214">+91 99138 28214</a>
          </div>
          <div className="sidebar-contact-item">
            <span className="sidebar-contact-label">Location</span>
            <span>Ahmedabad, Gujarat, India</span>
          </div>
        </div>

        <a className="btn primary full-width sidebar-primary-cta" href="mailto:ayushbhavsar70@gmail.com">
          Schedule Interview
        </a>

        <div className="sidebar-links">
          <a
            href="https://www.linkedin.com/in/ayushbhavsar5"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ayushbhavsar210"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/1FdUQyDCph47MC8hYXOjH2L_SlNz-yFEW/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume PDF
          </a>
        </div>
      </div>
    </aside>
  )
}

export default SidebarProfile
