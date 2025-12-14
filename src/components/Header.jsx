import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header header-tabs">
      <nav className="tabs-nav">
        <NavLink to="/" end>About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
