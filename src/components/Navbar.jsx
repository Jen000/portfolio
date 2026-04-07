import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { key: 'projects', label: 'Projects' },
  { key: 'resume',   label: 'Resume'   },
  { key: 'about',    label: 'About'    },
  { key: 'contact',  label: 'Contact'  },
]

export default function Navbar({ setPage, activePage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (key) => {
    setPage(key)
    setMenuOpen(false)
  }

  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => navigate('home')}>
        Jenna
      </button>

      {/* Desktop links */}
      <div className="nav-links">
        {links.map(({ key, label }) => (
          <button
            key={key}
            className={`nav-btn${activePage === key ? ' active' : ''}`}
            onClick={() => navigate(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger toggle */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map(({ key, label }) => (
            <button
              key={key}
              className={`nav-mobile-btn${activePage === key ? ' active' : ''}`}
              onClick={() => navigate(key)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}