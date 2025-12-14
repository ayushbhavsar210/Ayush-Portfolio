import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Ayush Bhavsar. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/ayushbhavsar210" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ayushbhavsar5" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
