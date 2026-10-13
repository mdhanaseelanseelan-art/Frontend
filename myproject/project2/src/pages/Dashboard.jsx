
import { Link } from "react-router-dom";

function Dashboard() {
  const categories = [
    { name: "IT & Software", icon: "bi-code-slash", count: "Software, web and testing jobs" },
    { name: "Manufacturing", icon: "bi-gear", count: "Production and quality jobs" },
    { name: "Technical Jobs", icon: "bi-tools", count: "Electrical and mechanical jobs" },
    { name: "Freshers & Internships", icon: "bi-mortarboard", count: "Entry-level opportunities" },
  ];

  const jobs = [
    { id: 101, title: "Frontend Developer", company: "ABC Technologies", location: "Chennai", salary: "₹3–5 LPA", type: "IT & Software" },
    { id: 102, title: "Production Engineer", company: "ABC Manufacturing", location: "Sriperumbudur", salary: "₹2.5–4 LPA", type: "Manufacturing" },
    { id: 103, title: "Quality Control Engineer", company: "Precision Industries", location: "Chennai", salary: "₹2.5–4 LPA", type: "Manufacturing" },
  ];

  return (
    <main className="container-fluid p-4">
      <div className="mb-4">
        <h2 className="fw-bold">Welcome to IDEA 👋</h2>
        <p className="text-secondary">
          Your Skills. Your Career. Your Future.
        </p>
      </div>

      <div className="row g-3 mb-5">
        {categories.map((category) => (
          <div className="col-12 col-sm-6 col-xl-3" key={category.name}>
            <Link
              to="/jobs"
              className="card h-100 p-4 text-decoration-none text-dark shadow-sm"
            >
              <i className={`bi ${category.icon} fs-2 text-primary mb-3`} />
              <h5>{category.name}</h5>
              <p className="text-secondary mb-0">{category.count}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Recommended Jobs</h4>
        <Link to="/jobs">View all jobs →</Link>
      </div>

      <div className="row g-3">
        {jobs.map((job) => (
          <div className="col-12 col-lg-4" key={job.id}>
            <div className="card job-card h-100">
              <div className="card-body">
                <span className="badge text-bg-light border mb-3">
                  {job.type}
                </span>
                <h5 className="fw-bold">{job.title}</h5>
                <p className="text-secondary mb-2">{job.company}</p>
                <p><i className="bi bi-geo-alt me-2" />{job.location}</p>
                <p className="fw-semibold">{job.salary}</p>
                <Link
                  to={`/jobs/${job.id}`}
                  className="btn btn-primary w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-4 mt-5">
        <h5>Prepare for Your Next Opportunity</h5>
        <p className="text-secondary">
          Improve your technical knowledge, HR interview skills and aptitude.
        </p>
        <Link to="/interview-prep" className="btn btn-outline-primary align-self-start">
          Start Preparation
        </Link>
      </div>
    </main>
  );
}

export default Dashboard;
