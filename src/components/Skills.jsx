import React from 'react'

const Skills = () => {
  const skills = [
    {
      title: 'Languages',
      items: ['JavaScript', 'Java', 'Dart'],
    },
    {
      title: 'Frontend',
      items: ['React (this site)', 'Flutter', 'AngularJS'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'ASP.NET'],
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'MySQL', 'Firebase'],
    },
    {
      title: 'Tools',
      items: ['Git & GitHub', 'VS Code', 'Postman', 'Android Studio'],
    },
    {
      title: 'Certifications',
      items: ['CCC', 'TallyACE', 'Java', 'DBMS', 'ASP.NET', 'MEAN Stack'],
    },
  ]

  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-intro">
          A mix of frontend, backend, databases, and tools that I use to build complete applications.
        </p>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
