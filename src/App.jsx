import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'projects': return <Projects />
      case 'resume': return <Resume />
      case 'about': return <About />
      case 'contact': return <Contact />
      default: return  <Home setPage={setPage} />
    }
  }

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="container">
        {renderPage()}
      </div>
    </div>
  )
}