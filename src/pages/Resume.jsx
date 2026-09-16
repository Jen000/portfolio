import { useState } from 'react'
import { Shuffle, Code2, Users } from 'lucide-react'

const data = {
  remix: {
    summary: "I lead with curiosity and dig to the root of the issue, not the symptom. Six years growing from QA to SE has sharpened that instinct, and taught me that what a client describes on a call is rarely the real problem. I like the full stack of the job: the technical work, the client relationships, and everything in between.",
    jobs: [
      {
        title: "Solutions Engineer",
        company: "Eleos Technologies",
        location: "Greenville, SC",
        dates: "Feb 2025 – Present",
        bullets: [
          "Technical point of contact for all 15 enterprise fleet clients and 3 reseller partners, collaborating closely with AEs, Product, Support, and Engineering to resolve issues and drive platform success.",
          "Lead discovery sessions that push past surface requirements to find the real operational problem, helping teams understand how the product works, think through operational challenges, and build toward the right solution.",
          "Own the full post-sale relationship for 3 strategic accounts, ensuring solutions work in practice, not just on paper.",
          "Built a zero-ETL AWS Athena connector in Java that queries HubSpot data on demand, integrating directly into the data lake and eliminating a third-party ETL dependency.",
          "Run knowledge-sharing sessions with AEs to close the gap between what clients are experiencing and what the team understands.",
        ],
      },
      {
        title: "Sales Engineer",
        company: "Eleos Technologies",
        location: "Greenville, SC",
        dates: "May 2023 – Feb 2025",
        bullets: [
          "Onboarded 2 new enterprise clients end-to-end — 100% rollout within 3 months by staying close to blockers as they emerged, not after.",
          "Translation layer between clients and Engineering: turned vague frustrations into clear requirements, and made sure fixes addressed what clients actually needed.",
          "Migrated reporting infrastructure to dbt with the BI team, delivering 50+ new reports improving visibility into client health.",
          "Authored user guides and technical documentation for platform features and public APIs used by clients and reseller partners.",
        ],
      },
      {
        title: "Associate Sales Engineer",
        company: "Eleos Technologies",
        location: "Clemson, SC",
        dates: "Jan 2022 – May 2023",
        bullets: [
          "Supported 5 resellers through complex integration challenges — dug into the technical details to understand why something wasn’t working before suggesting a fix.",
          "Collaborated with Support and Product to resolve escalated issues, improving time-to-resolution by ensuring the right people had the right context.",
        ],
      },
      {
        title: "QA Analyst & Support Agent",
        company: "Eleos Technologies",
        location: "Clemson, SC",
        dates: "Jun 2020 – Jan 2022",
        bullets: [
          "Managed ~120 client inquiries monthly; reduced resolution time 20% by spotting patterns in recurring issues.",
          "Built the QA onboarding program from scratch — reduced early turnover 35% by standardizing training and setting clearer expectations from day one.",
        ],
      },
    ],
    skills: [
      { category: "Client Success", items: "Account Management, Technical Onboarding, Solutioning, Cross-functional Collaboration" },
      { category: "Technical", items: "REST APIs, SQL, dbt, AWS Athena, Python, Java, React, Git" },
      { category: "Communication", items: "Technical Documentation, Stakeholder Presentations, Translating complexity for non-technical audiences" },
      { category: "AI & Productivity", items: "Prompt engineering, AI-assisted development (Claude, Gemini)" },
    ],
  },

  technical: {
    summary: "Solutions Engineer with deep experience in data engineering, system integration, and API development. Proven ability to design and build scalable data infrastructure, eliminate technical debt, and deliver measurable improvements to data quality and accessibility. Actively leverages AI tools to accelerate development.",
    jobs: [
      {
        title: "Solutions Engineer",
        company: "Eleos Technologies",
        location: "Greenville, SC",
        dates: "Feb 2025 – Present",
        bullets: [
          "Built a zero-ETL AWS Athena connector in Java that queries HubSpot API data on an ad hoc basis, integrating results directly into the existing data lake — eliminating a third-party ETL dependency and unlocking previously inaccessible data.",
          "Develop and maintain technical documentation, integration guides, and API references that accelerate client onboarding and reduce time-to-value.",
          "Incorporate AI prompt engineering (Claude, Gemini) into daily workflows to improve solutioning speed and technical output quality.",
        ],
      },
      {
        title: "Sales Engineer",
        company: "Eleos Technologies",
        location: "Greenville, SC",
        dates: "May 2023 – Feb 2025",
        bullets: [
          "Partnered with the business intelligence team to migrate reporting infrastructure to dbt, delivering 50+ new reports that improved visibility into client health and operational performance.",
          "Authored user guides and technical documentation for platform features and public APIs used by clients and reseller partners.",
        ],
      },
      {
        title: "Associate Sales Engineer",
        company: "Eleos Technologies",
        location: "Clemson, SC",
        dates: "Jan 2022 – May 2023",
        bullets: [
          "Supported 5 product resellers through complex app and web integration challenges, serving as a technical resource during pre- and post-sales engagements.",
        ],
      },
      {
        title: "QA Analyst & Support Agent",
        company: "Eleos Technologies",
        location: "Clemson, SC",
        dates: "Jun 2020 – Jan 2022",
        bullets: [
          "Conducted QA testing across 6 product segments, documenting defects and working cross-functionally with Engineering to drive resolution and reduce post-release issues.",
          "Designed and implemented the QA Analyst onboarding program from scratch, standardizing training across the team and reducing early turnover by 35%.",
        ],
      },
    ],
    skills: [
      { category: "Data & Infrastructure", items: "dbt, AWS Athena, SQL (MySQL, PostgreSQL), Data Modeling, Business Intelligence" },
      { category: "Development", items: "Python, Java, React, REST APIs, API Integration, Git" },
      { category: "AI & Productivity", items: "Prompt engineering, AI-assisted development (Claude, Gemini)" },
    ],
  },

  client: {
    summary: "Client-focused Solutions Engineer and former banker with 7+ years of experience building trusted relationships, leading technical onboarding, and translating complexity into clarity. Track record of driving customer success across both financial services and enterprise SaaS.",
    jobs: [
      {
        title: "Solutions Engineer",
        company: "Eleos Technologies",
        location: "Greenville, SC",
        dates: "Feb 2025 – Present",
        bullets: [
          "Serve as the technical point of contact for all 15 direct clients and 3 reseller partners, supporting integrations, troubleshooting, and platform adoption across the full customer base.",
          "Lead discovery and solutioning sessions with clients to map business requirements to platform capabilities, designing integrations and workflows tailored to each customer's operational needs.",
          "Develop and maintain technical documentation, integration guides, and API references that accelerate client onboarding and reduce time-to-value.",
        ],
      },
      {
        title: "Sales Engineer",
        company: "Eleos Technologies",
        location: "Greenville, SC",
        dates: "May 2023 – Feb 2025",
        bullets: [
          "Managed end-to-end onboarding for 2 new enterprise clients, leading technical scoping, integration development, and go-live — achieving 100% rollout within 3 months of contract signing.",
          "Acted as the technical bridge between clients and internal Engineering, translating customer feedback into product improvements and ensuring alignment on integration requirements.",
          "Authored user guides and technical documentation for platform features and public APIs used by clients and reseller partners.",
        ],
      },
      {
        title: "Associate Sales Engineer",
        company: "Eleos Technologies",
        location: "Clemson, SC",
        dates: "Jan 2022 – May 2023",
        bullets: [
          "Supported 5 product resellers through complex app and web integration challenges, serving as a technical resource during pre- and post-sales engagements.",
          "Collaborated with support and product teams to resolve escalated client issues, reducing time-to-resolution and improving customer satisfaction scores.",
        ],
      },
      {
        title: "QA Analyst & Support Agent",
        company: "Eleos Technologies",
        location: "Clemson, SC",
        dates: "Jun 2020 – Jan 2022",
        bullets: [
          "Participated in screening and interviewing candidates for QA Analyst roles, contributing to hiring decisions and team growth.",
          "Managed approximately 120 client inquiries monthly, developing deep product knowledge and reducing resolution time by 20% through improved troubleshooting processes.",
        ],
      },
      {
        title: "Lead Teller & Personal Banker",
        company: "Wells Fargo",
        location: "Greenville & Seneca, SC",
        dates: "2017 – 2020",
        bullets: [
          "Built and maintained long-term client relationships while managing complex banking transactions, escalations, and day-to-day service needs across two branch locations.",
          "Led team huddles and delivered one-on-one coaching sessions for 12+ team members across two branches, tailoring approaches to individual learning styles to drive performance and engagement.",
          "Prevented 27+ fraudulent transactions and maintained $0 in decision and policy losses, demonstrating strong attention to detail and sound risk judgment.",
        ],
      },
    ],
    skills: [
      { category: "Client Success", items: "Account Management, Technical Onboarding, Solutioning, Client Advocacy, Relationship Management" },
      { category: "Communication", items: "Technical Documentation, User Guides, Stakeholder Presentations, Cross-functional Collaboration" },
      { category: "Technical", items: "REST APIs, SQL, API Integration" },
      { category: "AI & Productivity", items: "Prompt engineering, AI-assisted development (Claude, Gemini)" },
    ],
  },
}

const presets = [
  { key: 'remix',     label: 'Remix',         sub: 'Best of both worlds',  icon: Shuffle },
  { key: 'technical', label: 'Technical',      sub: 'Engineering focused',  icon: Code2  },
  { key: 'client',    label: 'Client-Facing',  sub: 'CSM / Account Mgmt',  icon: Users  },
]

export default function Resume() {
  const [active, setActive] = useState('remix')
  const resume = data[active]

  const downloadResume = () => window.print()

  return (
    <div className="resume-page">
      <div className="resume-wrapper">

        {/* ── Preset selector ── */}
        <div className="resume-presets">
          <p className="resume-presets-label">I've worn a lot of hats — select the version most relevant to what you're looking for.</p>
          <div className="resume-preset-btns">
            {presets.map(({ key, label, sub, icon: Icon }) => (
              <button
                key={key}
                className={`resume-preset-btn${active === key ? ' active' : ''}`}
                onClick={() => setActive(key)}
              >
                <Icon size={15} strokeWidth={1.5} className="resume-preset-icon" />
                <span className="resume-preset-btn-label">{label}</span>
                <span className="resume-preset-btn-sub">{sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Download ── */}
        <div className="resume-download-bar">
          <span className="resume-download-note">
            Downloading: <strong>{presets.find(p => p.key === active).label}</strong> version
          </span>
          <button className="btn-download" onClick={downloadResume}>↓ Download PDF</button>
        </div>

        {/* ── Resume card ── */}
        <div className="resume-card" id="resume">
          <div className="resume-header">
            <h1 className="resume-name">Jenna Adams</h1>
            <div className="resume-contact">
              (864) 607-4102 &nbsp;·&nbsp; Greenville, SC 29601 &nbsp;·&nbsp;
              <a href="mailto:jennashaye417@gmail.com">jennashaye417@gmail.com</a> &nbsp;·&nbsp;
              <a href="https://jenna-adams.info" target="_blank" rel="noopener noreferrer">jenna-adams.info</a>
            </div>
          </div>

          <div className="resume-section">
            <h2 className="resume-section-title">Professional Summary</h2>
            <p className="resume-summary">{resume.summary}</p>
          </div>

          <div className="resume-section">
            <h2 className="resume-section-title">Experience</h2>
            {resume.jobs.map((job) => (
              <div key={`${job.title}-${job.company}`} className="resume-job">
                <div className="resume-job-header">
                  <span className="resume-job-title">{job.title}</span>
                  <span className="resume-job-dates">{job.dates}</span>
                </div>
                <div className="resume-job-company">{job.company} — {job.location}</div>
                <ul>
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            <div className="resume-edu-header">
              <span className="resume-edu-degree">B.S. in Computer Information Systems</span>
            </div>
            <div className="resume-edu-school">Clemson University — Clemson, SC</div>
          </div>

          <div className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            <div className="skills-grid">
              {resume.skills.map((skill) => (
                <div key={skill.category} className="skill-row">
                  <span className="skill-category">{skill.category}</span>
                  <span className="skill-items">{skill.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}