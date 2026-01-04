import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-intro">
          Feel free to reach out for internship, fresher roles, or collaborations.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contact Details</h3>
            <ul className="contact-list">
              <li><span>Location:</span> 1208, Mota Patel Vado, Kapadwanj</li>
              <li><span>Phone:</span> <a href="tel:+919913828214">+91 99138 28214</a></li>
              <li><span>Email:</span> <a href="mailto:ayushbhavsar70@gmail.com">ayushbhavsar70@gmail.com</a></li>
              <li>
                <span>LinkedIn:</span>{' '}
                <a
                  href="https://www.linkedin.com/in/ayushbhavsar5"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/ayushbhavsar5
                </a>
              </li>
              <li>
                <span>GitHub:</span>{' '}
                <a
                  href="https://github.com/ayushbhavsar210"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/ayushbhavsar210
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-card">
            <h3>Languages</h3>
            <ul className="contact-list">
              <li>English (Fluent)</li>
              <li>Hindi (Fluent)</li>
              <li>Gujarati (Native)</li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1I5Rww7ZndM9K99mo6A2nfZWGz_0D2mWq/view?usp=sharing"
              className="btn primary full-width"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume (add your link)
            </a>
            <p className="resume-note">
              Tip: Replace the button link with your actual resume URL (Google Drive / GitHub).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
