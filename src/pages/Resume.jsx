export default function Resume() {

  const downloadResume = () => {
    window.print()
  }

  return (
    <div>
      <h1>Resume</h1>

      <div className="card" id="resume">
        <h2>Jenna Adams</h2>
        <p>(864) 607-4102 • Greenville, SC • jennashaye417@gmail.com</p>

        <h3>Professional Summary</h3>
        <p>
          Solutions Engineer with expertise in data engineering, business intelligence, and technical consulting. Experienced building scalable data integrations, migrating reporting infrastructure, and managing client accounts.
        </p>

        <h3>Experience</h3>
        <p><strong>Solutions Engineer</strong> — Eleos Technologies (2025–Present)</p>
        <ul>
          <li>Own 3 client accounts as primary technical contact</li>
          <li>Led BI migration to dbt + AWS Athena</li>
          <li>Built zero-ETL Athena connector integrating HubSpot API</li>
        </ul>

        <p><strong>Sales Engineer</strong> — Eleos Technologies (2023–2025)</p>
        <ul>
          <li>Onboarded clients with 100% rollout success</li>
          <li>Delivered 50+ dbt models and reports</li>
        </ul>

        <p><strong>Associate Sales Engineer</strong> — Eleos Technologies (2022–2023)</p>
        <ul>
          <li>Supported integrations and troubleshooting</li>
        </ul>

        <p><strong>QA Analyst & Support</strong> — Eleos Technologies (2020–2022)</p>
        <ul>
          <li>Reduced defects and improved onboarding</li>
        </ul>

        <h3>Skills</h3>
        <p>
          dbt, AWS Athena, SQL, Python, Java, React, APIs, AI tools, Prompt Engineering
        </p>
      </div>

      <div className="cta">
        <button className="btn-primary" onClick={downloadResume}>
          Download as PDF
        </button>
      </div>
    </div>
  )
}