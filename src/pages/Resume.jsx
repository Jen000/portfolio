export default function Resume() {
  const downloadResume = () => {
    window.print()
  }

  return (
    <div className="resume-page">
      <div className="resume-wrapper">
        <div className="resume-download-bar">
          <button className="btn-download" onClick={downloadResume}>↓ Download PDF</button>
        </div>

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
            <p className="resume-summary">
              Client-focused Solutions Engineer with 4+ years of experience guiding technical implementations, managing strategic accounts, and translating complex requirements into scalable solutions. Proven track record of driving successful client onboarding, building trusted cross-functional partnerships, and delivering measurable outcomes. Actively leverages AI tools to work smarter and move faster.
            </p>
          </div>

          <div className="resume-section">
            <h2 className="resume-section-title">Experience</h2>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Solutions Engineer</span>
                <span className="resume-job-dates">Feb 2025 – Present</span>
              </div>
              <div className="resume-job-company">Eleos Technologies — Greenville, SC</div>
              <ul>
                <li>Serve as the technical point of contact for all 15 direct clients and 3 reseller partners, supporting integrations, troubleshooting, and platform adoption across the full customer base.</li>
                <li>Lead discovery and solutioning sessions with clients to map business requirements to platform capabilities, designing integrations and workflows tailored to each customer's operational needs.</li>
                <li>Built a zero-ETL AWS Athena connector in Java that queries HubSpot API data on an ad hoc basis, integrating results directly into the existing data lake — eliminating a third-party ETL dependency and unlocking previously inaccessible data.</li>
                <li>Develop and maintain technical documentation, integration guides, and API references that accelerate client onboarding and reduce time-to-value.</li>
                <li>Incorporate AI prompt engineering (Claude, Gemini) into daily workflows to improve solutioning speed and technical output quality.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Sales Engineer</span>
                <span className="resume-job-dates">May 2023 – Feb 2025</span>
              </div>
              <div className="resume-job-company">Eleos Technologies — Greenville, SC</div>
              <ul>
                <li>Managed end-to-end onboarding for 2 new enterprise clients, leading technical scoping, integration development, and go-live — achieving 100% rollout within 3 months of contract signing.</li>
                <li>Acted as the technical bridge between clients and internal Engineering, translating customer feedback into product improvements and ensuring alignment on integration requirements.</li>
                <li>Partnered with business intelligence team to migrate reporting infrastructure to dbt, delivering 50+ new reports that improved visibility into client health and operational performance.</li>
                <li>Authored user guides and technical documentation for platform features and public APIs used by clients and reseller partners.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Associate Sales Engineer</span>
                <span className="resume-job-dates">Jan 2022 – May 2023</span>
              </div>
              <div className="resume-job-company">Eleos Technologies — Clemson, SC</div>
              <ul>
                <li>Supported 5 product resellers through complex integration challenges, serving as a technical resource during pre- and post-sales engagements.</li>
                <li>Collaborated with support and product teams to resolve escalated client issues, reducing time-to-resolution and improving satisfaction scores.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">QA Analyst & Support Agent</span>
                <span className="resume-job-dates">Jun 2020 – Jan 2022</span>
              </div>
              <div className="resume-job-company">Eleos Technologies — Clemson, SC</div>
              <ul>
                <li>Built foundational product knowledge across 6 platform segments; supported ~120 client inquiries monthly and reduced resolution time by 20%.</li>
              </ul>
            </div>
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
              <div className="skill-row">
                <span className="skill-category">Client Success</span>
                <span className="skill-items">Account Management, Technical Onboarding, Solutioning, Cross-functional Collaboration</span>
              </div>
              <div className="skill-row">
                <span className="skill-category">Technical</span>
                <span className="skill-items">REST APIs, API Integration, SQL, dbt, AWS Athena, Python, Java, React, Git</span>
              </div>
              <div className="skill-row">
                <span className="skill-category">Communication</span>
                <span className="skill-items">Technical Documentation, User Guides, Stakeholder Presentations</span>
              </div>
              <div className="skill-row">
                <span className="skill-category">AI & Productivity</span>
                <span className="skill-items">Prompt engineering, AI-assisted development (Claude, Gemini)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}