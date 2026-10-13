
import "./SubmissionSuccess.css";

function SubmissionSuccess({
  complaint,
  onHome,
  onNewComplaint,
}) {
  return (
    <div className="success-page">
      <header className="success-header">
        <div className="success-brand">
          <div className="success-logo">TN</div>
          <div>
            <h2>TN PUBLIC GRIEVANCE</h2>
            <p>Complaint Priority Management System</p>
          </div>
        </div>

        <span className="success-portal">CITIZEN PORTAL</span>
      </header>

      <main className="success-main">
        <section className="success-card">
          <div className="success-icon">
            <svg
              viewBox="0 0 24 24"
              width="42"
              height="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <span className="success-label">SUBMISSION CONFIRMATION</span>

          <h1>
            Your Complaint Was
            <br />
            <span>Submitted Successfully!</span>
          </h1>

          <p className="success-description">
            Thank you for reporting this public issue. Your complaint
            details have been received by this project demonstration.
          </p>

          <div className="success-id-box">
            <span>YOUR DEMO COMPLAINT ID</span>
            <strong>{complaint.id}</strong>
            <p>Keep this ID for reference during this demo session.</p>
          </div>

          <div className="success-details">
            <h2>Complaint Summary</h2>

            <div className="success-detail-row">
              <span>Department</span>
              <strong>{complaint.department}</strong>
            </div>

            <div className="success-detail-row">
              <span>District</span>
              <strong>{complaint.district}</strong>
            </div>

            <div className="success-detail-row">
              <span>Taluk</span>
              <strong>{complaint.taluk}</strong>
            </div>

            <div className="success-detail-row">
              <span>Town / Village</span>
              <strong>{complaint.place}</strong>
            </div>

            <div className="success-detail-row">
              <span>Complaint Type</span>
              <strong>{complaint.complaintType}</strong>
            </div>

            <div className="success-detail-row">
              <span>Submission Status</span>
              <strong className="success-status">
                Demo Submitted
              </strong>
            </div>
          </div>

          <div className="success-notice">
            <strong>Note:</strong> This is a frontend project demonstration.
            Your complaint has not been sent to a government department.
          </div>

          <div className="success-actions">
            <button
              type="button"
              className="success-primary"
              onClick={onHome}
            >
              Return to Home
            </button>

            <button
              type="button"
              className="success-secondary"
              onClick={onNewComplaint}
            >
              Submit Another Complaint
            </button>
          </div>
        </section>
      </main>

      <footer className="success-footer">
        <div>
          <strong>TN Public Grievance</strong>
          <p>AI-Based Complaint Priority Management System</p>
        </div>

        <p>Citizen-focused digital service · Project Demo</p>

        <span>© {new Date().getFullYear()} · All rights reserved</span>
      </footer>
    </div>
  );
}

export default SubmissionSuccess;
