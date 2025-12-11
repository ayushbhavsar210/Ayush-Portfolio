import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SidebarProfile from './components/SidebarProfile'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div className="app-shell">
        <SidebarProfile />
        <div className="content-shell">
          <Header />
          <main className="content-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
