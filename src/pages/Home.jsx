export default function Home({ setPage }) {
  return (
    <div>
      <h1>Hi, I’m Jenna</h1>
      <p className="tagline">
        I help teams solve messy, real-world problems — bridging the gap between technical systems and the people who rely on them.
      </p>

      <div className="cta">
        <button className="btn-primary" onClick={() => setPage('projects')}>
          View Projects
        </button>
        <button className="btn-primary" onClick={() => setPage('resume')}>
          View Resume
        </button>
      </div>
    </div>
  )
}