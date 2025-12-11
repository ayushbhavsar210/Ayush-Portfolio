import React from 'react'
import profileImg from '../assets/ayush-profile.jpg'

const SidebarProfile = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-card card-elevated">
        <div className="sidebar-avatar-wrapper">
          <img src={profileImg} alt="Ayush Bhavsar" className="sidebar-avatar" />
        </div>
        <h1 className="sidebar-name">Ayush Bhavsar</h1>
        <p className="sidebar-tag">MCA Student · Full-Stack Developer</p>

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
            <span>Kapadwanj, Gujarat, India</span>
          </div>
        </div>

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
            href="https://drive.google.com/file/d/1I5Rww7ZndM9K99mo6A2nfZWGz_0D2mWq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </aside>
  )
}

export default SidebarProfile
