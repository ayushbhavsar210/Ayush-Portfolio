import React from 'react'

const Education = () => {
  return (
    <section id="education" className="section alt">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="edu-item">
            <h3>Master of Computer Applications (MCA)</h3>
            <p className="edu-meta">
              Charotar University of Science and Technology (CHARUSAT), Gujarat ·
              Aug 2024 – Oct 2026 (Expected)
            </p>
            <p className="edu-grade">Current CGPA: 7.11 / 10</p>
          </div>
          <div className="edu-item">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p className="edu-meta">
              Sardar Patel University, Gujarat · July 2021 – June 2024
            </p>
            <p className="edu-grade">CGPA: 6.55 / 10</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
