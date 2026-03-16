import React from 'react'

const Education = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-intro">
          Strong academic base in software engineering and web development, aligned with practical
          MERN stack project implementation and industry-ready problem solving.
        </p>

        <div className="education-summary-grid">
          <article className="edu-item education-highlight-card">
            <p className="edu-label">Academic Snapshot</p>
            <h3>Master of Computer Applications (MCA)</h3>
            <p className="edu-meta">
              CHARUSAT, Gujarat | Aug 2024 - Oct 2026 (Expected)
            </p>
<<<<<<< HEAD
            <p className="edu-grade">Current CGPA: 7.38 / 10</p>
          </div>
          <div className="edu-item">
=======
            <p className="edu-grade">Current CGPA: 7.11 / 10</p>
            <div className="edu-pill-row">
              <span className="edu-pill">Web Development</span>
              <span className="edu-pill">Database Systems</span>
              <span className="edu-pill">Software Engineering</span>
            </div>
          </article>

          <article className="edu-item">
            <p className="edu-label">Role-Relevant Coursework</p>
            <h3>MERN and Backend Foundations</h3>
            <ul className="edu-points">
              <li>Data Structures and Algorithms for problem-solving ability</li>
              <li>DBMS and SQL for schema design and query optimization</li>
              <li>Web Technologies for frontend and API development workflows</li>
              <li>Software Engineering for modular design and maintainable code</li>
            </ul>
          </article>
        </div>

        <div className="education-timeline">
          <article className="edu-item timeline-card">
            <p className="edu-label">Postgraduate Degree</p>
            <h3>Master of Computer Applications (MCA)</h3>
            <p className="edu-meta">
              Charotar University of Science and Technology (CHARUSAT), Gujarat |
              Aug 2024 - Oct 2026 (Expected)
            </p>
            <p className="edu-grade">Current CGPA: 7.11 / 10</p>
            <ul className="edu-points">
              <li>Building practical full-stack projects with API and database integration</li>
              <li>Applying software architecture concepts to real coursework and assignments</li>
              <li>Focused learning on backend development and modern JavaScript ecosystem</li>
            </ul>
          </article>

          <article className="edu-item timeline-card">
            <p className="edu-label">Undergraduate Degree</p>
>>>>>>> fbedd25 (changes in User InterFace)
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p className="edu-meta">
              Sardar Patel University, Gujarat | July 2021 - June 2024
            </p>
            <p className="edu-grade">CGPA: 6.55 / 10</p>
            <ul className="edu-points">
              <li>Established fundamentals in programming, databases, and operating systems</li>
              <li>Completed academic projects that improved implementation confidence</li>
              <li>Built a foundation for transition into professional full-stack development</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education
