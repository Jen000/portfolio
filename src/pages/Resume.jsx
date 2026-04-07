export default function Resume() {
  const downloadResume = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .resume-page {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          background: #f5f2ee;
          min-height: 100vh;
          padding: 60px 24px 80px;
          color: #1a1714;
        }

        .resume-wrapper {
          max-width: 780px;
          margin: 0 auto;
        }

        /* Download button */
        .resume-download-bar {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 28px;
        }

        .btn-download {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #1a1714;
          color: #f5f2ee;
          border: none;
          padding: 10px 22px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .btn-download:hover {
          background: #b5531a;
          color: #fff;
        }

        /* Card */
        .resume-card {
          background: #fffdf9;
          border: 1px solid #ddd9d3;
          padding: 56px 64px;
          box-shadow: 4px 4px 0px #ddd9d3;
        }

        /* Header */
        .resume-header {
          border-bottom: 2px solid #1a1714;
          padding-bottom: 28px;
          margin-bottom: 36px;
        }

        .resume-name {
          font-family: 'Playfair Display', serif;
          font-size: 46px;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0 0 10px;
          line-height: 1;
          color: #1a1714;
        }

        .resume-contact {
          font-size: 13.5px;
          font-weight: 400;
          color: #6b6560;
          letter-spacing: 0.02em;
        }

        .resume-contact a {
          color: #b5531a;
          text-decoration: none;
        }

        .resume-contact a:hover {
          text-decoration: underline;
        }

        /* Section */
        .resume-section {
          margin-bottom: 36px;
        }

        .resume-section-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b5531a;
          margin: 0 0 14px;
          padding-bottom: 6px;
          border-bottom: 1px solid #e8e4de;
        }

        /* Summary */
        .resume-summary {
          font-size: 14.5px;
          line-height: 1.7;
          color: #3d3a37;
          font-weight: 300;
        }

        /* Job entry */
        .resume-job {
          margin-bottom: 24px;
        }

        .resume-job:last-child {
          margin-bottom: 0;
        }

        .resume-job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2px;
          flex-wrap: wrap;
          gap: 4px;
        }

        .resume-job-title {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 600;
          color: #1a1714;
        }

        .resume-job-dates {
          font-size: 12.5px;
          font-weight: 400;
          color: #9a9490;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .resume-job-company {
          font-size: 13px;
          font-weight: 400;
          color: #6b6560;
          margin-bottom: 10px;
          letter-spacing: 0.01em;
        }

        .resume-job ul {
          margin: 0;
          padding-left: 18px;
          list-style: none;
        }

        .resume-job ul li {
          font-size: 13.5px;
          line-height: 1.65;
          color: #3d3a37;
          margin-bottom: 5px;
          position: relative;
          padding-left: 12px;
        }

        .resume-job ul li::before {
          content: '—';
          position: absolute;
          left: -12px;
          color: #b5531a;
          font-weight: 300;
        }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 32px;
        }

        .skill-row {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .skill-category {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9a9490;
        }

        .skill-items {
          font-size: 13px;
          color: #3d3a37;
          line-height: 1.5;
        }

        /* Education */
        .resume-edu-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 4px;
        }

        .resume-edu-degree {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 600;
          color: #1a1714;
        }

        .resume-edu-school {
          font-size: 13px;
          color: #6b6560;
          margin-top: 2px;
        }

        /* Print styles */
        @media print {
          body { background: white !important; margin: 0; }
          .resume-page { background: white; padding: 0; }
          .resume-card { border: none; box-shadow: none; padding: 32px; }
          .resume-download-bar { display: none; }
          .resume-wrapper { max-width: 100%; }
        }

        @media (max-width: 600px) {
          .resume-card { padding: 32px 24px; }
          .resume-name { font-size: 34px; }
          .skills-grid { grid-template-columns: 1fr; }
          .resume-job-header { flex-direction: column; }
        }
      `}</style>

      <div className="resume-page">
        <div className="resume-wrapper">

          <div className="resume-download-bar">
            <button className="btn-download" onClick={downloadResume}>
              ↓ Download PDF
            </button>
          </div>

          <div className="resume-card" id="resume">

            {/* Header */}
            <div className="resume-header">
              <h1 className="resume-name">Jenna Adams</h1>
              <div className="resume-contact">
                (864) 607-4102 &nbsp;·&nbsp; Greenville, SC 29601 &nbsp;·&nbsp;
                <a href="mailto:jennashaye417@gmail.com">jennashaye417@gmail.com</a>
              </div>
            </div>

            {/* Summary */}
            <div className="resume-section">
              <h2 className="resume-section-title">Professional Summary</h2>
              <p className="resume-summary">
                Solutions Engineer with expertise in data engineering, business intelligence, and technical consulting.
                Experienced building scalable data integrations, migrating reporting infrastructure, and managing client accounts.
                Actively incorporates AI and prompt engineering into daily workflows to deliver faster, smarter outcomes.
              </p>
            </div>

            {/* Experience */}
            <div className="resume-section">
              <h2 className="resume-section-title">Experience</h2>

              <div className="resume-job">
                <div className="resume-job-header">
                  <span className="resume-job-title">Solutions Engineer</span>
                  <span className="resume-job-dates">Feb 2025 – Present</span>
                </div>
                <div className="resume-job-company">Eleos Technologies — Greenville, SC</div>
                <ul>
                  <li>Manage 3 direct house accounts as primary technical point of contact, driving product adoption and long-term client success.</li>
                  <li>Lead BI initiatives on the reporting team, migrating legacy reports to a dbt + AWS Athena infrastructure and building new metrics and KPIs previously untracked by the organization.</li>
                  <li>Designed and built a zero-ETL AWS Athena connector in Java that queries HubSpot API data on an ad hoc basis, integrating results directly into the existing data lake and eliminating reliance on a third-party ETL service (Stitch).</li>
                  <li>Produce and maintain technical documentation for internal tools, platform features, and public-facing APIs.</li>
                  <li>Leverage AI tools and prompt engineering (Claude, Gemini) to accelerate development and improve cross-functional productivity.</li>
                </ul>
              </div>

              <div className="resume-job">
                <div className="resume-job-header">
                  <span className="resume-job-title">Sales Engineer</span>
                  <span className="resume-job-dates">May 2023 – Feb 2025</span>
                </div>
                <div className="resume-job-company">Eleos Technologies — Greenville, SC</div>
                <ul>
                  <li>Onboarded 2 new direct clients end-to-end, implementing custom integrations and business logic with 100% rollout within 3 months of contract signing.</li>
                  <li>Partnered with Engineering to migrate 100% of reporting into dbt infrastructure, delivering 50+ reports and models with robust data quality testing.</li>
                  <li>Developed and maintained technical documentation and user guides for internal tools and public APIs.</li>
                </ul>
              </div>

              <div className="resume-job">
                <div className="resume-job-header">
                  <span className="resume-job-title">Associate Sales Engineer</span>
                  <span className="resume-job-dates">Jan 2022 – May 2023</span>
                </div>
                <div className="resume-job-company">Eleos Technologies — Clemson, SC</div>
                <ul>
                  <li>Supported 5 product resellers through complex app and web integration challenges, ensuring seamless product alignment.</li>
                  <li>Partnered with the support team to troubleshoot technical issues and improve client satisfaction.</li>
                </ul>
              </div>

              <div className="resume-job">
                <div className="resume-job-header">
                  <span className="resume-job-title">QA Analyst & Support Agent</span>
                  <span className="resume-job-dates">Jun 2020 – Jan 2022</span>
                </div>
                <div className="resume-job-company">Eleos Technologies — Clemson, SC</div>
                <ul>
                  <li>Conducted QA testing across 6 product segments, reducing post-release defects by 11%.</li>
                  <li>Designed QA Analyst onboarding process, reducing early turnover by 35%.</li>
                  <li>Managed ~700 client inquiries monthly, reducing resolution time by 20%.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <div className="resume-edu-header">
                <span className="resume-edu-degree">B.S. in Computer Information Systems</span>
              </div>
              <div className="resume-edu-school">Clemson University — Clemson, SC</div>
            </div>

            {/* Skills */}
            <div className="resume-section">
              <h2 className="resume-section-title">Skills</h2>
              <div className="skills-grid">
                <div className="skill-row">
                  <span className="skill-category">Data & BI</span>
                  <span className="skill-items">dbt, AWS Athena, SQL (MySQL, PostgreSQL), Data Modeling, Business Intelligence</span>
                </div>
                <div className="skill-row">
                  <span className="skill-category">Development</span>
                  <span className="skill-items">Python, Java, React, REST APIs, API Integration, Git</span>
                </div>
                <div className="skill-row">
                  <span className="skill-category">Technical</span>
                  <span className="skill-items">Technical Support, QA & Testing, Debugging, Project Documentation</span>
                </div>
                <div className="skill-row">
                  <span className="skill-category">AI & Productivity</span>
                  <span className="skill-items">AI-assisted development, Prompt engineering (Claude, Gemini)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}