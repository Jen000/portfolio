export default function Navbar({ setPage }) {
  return (
    <nav className="nav">
      <h2 onClick={() => setPage('home')}>Jenna</h2>
      <div>
        <button onClick={() => setPage('projects')}>Projects</button>
        <button onClick={() => setPage('resume')}>Resume</button>
        <button onClick={() => setPage('about')}>About</button>
        <button onClick={() => setPage('contact')}>Contact</button>
      </div>
    </nav>
  )
}