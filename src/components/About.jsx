import React from 'react'

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-intro">
          I&apos;m Ayush Bhavsar, an MCA student with a strong interest in full‑stack development.
          I love turning ideas into working products — from clean, modern UIs to reliable, secure
          backend APIs. I enjoy learning new technologies and writing code that is easy to read,
          maintain, and improve.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Full‑Stack Mindset</h3>
            <p>
              I have a full-stack development mindset with primary experience in the MERN stack and PHP, focusing on building clean, scalable applications. I also have working knowledge of ASP.NET and Flutter, allowing me to adapt quickly across technologies.
            </p>
          </div>
          <div className="about-card">
            <h3>Real Projects</h3>
            <p>
              From a quiz web application to an expense tracker mobile app and an online
              tour &amp; travel system, I&apos;ve built projects that solve real problems and
              follow proper architecture, authentication, and database design.
            </p>
          </div>
          <div className="about-card">
            <h3>Career Goals</h3>
            <p>
              I&apos;m looking for an internship or junior role in Web Development ( MEAN / MERN / PHP )
              where I can learn from senior developers, contribute to production code, and grow into
              a reliable full‑stack engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
