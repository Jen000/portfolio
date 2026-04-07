import ProjectCard from '../components/ProjectCard'
import { Lock } from 'lucide-react'

const projects = [
  {
    title: "Octo-Fall Leaf Catcher Game",
    description: "A browser game where you catch falling leaves while dodging pinecones. Built for smooth, responsive gameplay across devices.",
    tags: ["JavaScript", "Canvas API", "Game Dev"],
    liveUrl: "https://jen000.github.io/octo-fall/",
    githubUrl: "https://github.com/Jen000/octo-fall",
  },
  {
    title: "DreamBean",
    description: "A personal web app built for my partner and me — it counts how long we've been together, shows NASA's picture of the day, and displays some comics that are personal to us.",
    tags: ["React", "NASA API"],
    liveUrl: "https://dreambean.app/",
    githubUrl: "https://github.com/Jen000/dreambean",
  },
  {
    title: "Trip Expense Tracker",
    description: "A login-only expense tracker I'm building for a 12-day west coast road trip. Tracks shared costs between two people in real time. Login-gated to keep AWS costs in check.",
    tags: ["React", "AWS", "SQL"],
    liveUrl: "https://www.tripexpenses.click/",
    githubUrl: "https://github.com/Jen000/TripCalculator",
  },
  {
    title: "Rotten Tomatoes Data",
    description: "A data visualization project from college — explores Rotten Tomatoes movie data to find patterns in ratings, genres, and critic vs. audience scores.",
    tags: ["Python", "Data Visualization", "SQL"],
    liveUrl: "https://jen000.github.io/RottenTomatoes/",
    githubUrl: "https://github.com/Jen000/RottenTomatoes",
  },
  {
    title: "Birthday Analyzer",
    description: "A college group project built while learning to work with APIs. Analyzes birthdays and surfaces fun facts — our first real dive into external data.",
    tags: ["Python", "APIs", "Data Analysis"],
    liveUrl: null,
    githubUrl: "https://github.com/Jen000/BirthdayAnalyzer",
  },
  {
    title: "CSS Headers",
    description: "A collection of styled header components built while exploring what's possible with pure CSS — a fun exercise in creative front-end craft.",
    tags: ["CSS", "HTML", "Frontend"],
    liveUrl: null,
    githubUrl: "https://github.com/Jen000/CSS-Headers",
  },
]

const workProjects = [
  {
    title: "Zero-ETL AWS Athena Connector",
    description: "A Java connector that queries HubSpot API data on an ad hoc basis and integrates results directly into our data lake — eliminating our reliance on a third-party ETL service.",
    tags: ["Java", "AWS Athena", "HubSpot API", "Data Engineering"],
  },
  {
    title: "dbt Reporting Infrastructure",
    description: "Migrated 100% of legacy reporting into a dbt + AWS Athena infrastructure. Delivered 50+ models and reports with robust data quality testing.",
    tags: ["dbt", "AWS Athena", "SQL", "Business Intelligence"],
  },
]

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-wrapper">

        {/* ── Personal projects ── */}
        <div className="projects-header">
          <span className="projects-eyebrow">Portfolio</span>
          <h1 className="projects-title">Things I've Built</h1>
          <p className="projects-subtitle">
            Personal projects across games, data, and tools — some live, all on GitHub.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        {/* ── Work projects ── */}
        <div className="projects-work-section">
          <div className="projects-work-header">
            <div className="projects-work-header-text">
              <span className="projects-eyebrow">Professional work</span>
              <h2 className="projects-work-title">Built at Eleos</h2>
              <p className="projects-subtitle">
                Production work from my time at Eleos Technologies. These live in a private repo, but are detailed on my resume.
              </p>
            </div>
            <a
              href="https://github.com/Jen000"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-github-link"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Work GitHub
            </a>
          </div>

          <div className="projects-work-grid">
            {workProjects.map((project) => (
              <div key={project.title} className="projects-work-card">
                <div className="projects-work-card-header">
                  <Lock size={13} strokeWidth={1.5} className="projects-work-lock" />
                  <span className="projects-work-private">Private repo</span>
                </div>
                <h3 className="projects-work-card-title">{project.title}</h3>
                <p className="projects-work-card-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}