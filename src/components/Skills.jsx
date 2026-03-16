import React from 'react'

const Skills = () => {
  const skills = [
    {
      title: 'MERN Stack',
      items: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      level: 88,
      levelLabel: 'Advanced',
    },
    {
      title: 'Frontend Development',
      items: ['React.js', 'JavaScript (ES6+)', 'Responsive UI', 'Routing'],
      level: 86,
      levelLabel: 'Advanced',
    },
    {
      title: 'Backend Development',
      items: ['Node.js', 'Express.js', 'REST API', 'Authentication'],
      level: 84,
      levelLabel: 'Advanced',
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'MySQL', 'Database Design', 'CRUD Operations'],
      level: 83,
      levelLabel: 'Strong',
    },
    {
      title: 'Developer Tools',
      items: ['Git', 'GitHub', 'Postman', 'VS Code'],
      level: 83,
      levelLabel: 'Strong',
    },
    {
      title: 'Other Technical Skills',
      items: ['Java', 'DBMS', 'ASP.NET', 'MEAN Fundamentals', 'Flutter Basics'],
      level: 78,
      levelLabel: 'Working Proficiency',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-intro">
          Target-role skills for MERN Stack Developer, React Developer, and Node.js Developer
          opportunities.
        </p>

        <div className="skills-intro-grid">
          <article className="skill-card skills-highlight-card">
            <p className="skills-kicker">Recruiter Snapshot</p>
            <h3>Core Strengths for MERN Hiring</h3>
            <p className="skills-summary">
              Practical experience in full-stack JavaScript development with focus on API-driven
              architecture, authentication, CRUD workflows, and responsive frontend implementation.
            </p>
            <div className="skills-pills">
              <span className="skills-pill">REST API Development</span>
              <span className="skills-pill">Authentication and Authorization</span>
              <span className="skills-pill">MongoDB Schema Design</span>
              <span className="skills-pill">React Component Architecture</span>
            </div>
          </article>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="skill-card">
              <div className="skill-header-row">
                <h3>{group.title}</h3>
                <span className="skill-level-tag">{group.levelLabel}</span>
              </div>
              <div className="skill-badge-list">
                {group.items.map((item) => (
                  <span key={item} className="skill-badge">{item}</span>
                ))}
              </div>
              <div className="skill-meter" aria-label={`${group.title} proficiency`}>
                <div className="skill-meter-fill" style={{ width: `${group.level}%` }} />
              </div>
              <p className="skill-score">Proficiency Score: {group.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
