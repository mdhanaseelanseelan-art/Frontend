
import { Link } from "react-router-dom";

function Applications() {
  const applications = JSON.parse(
    localStorage.getItem("ideaApplications") || "[]"
  );

  return (
    <main className="container-fluid p-4">
      <h2 className="fw-bold">My Applications</h2>
      <p className="text-secondary">
        Track your submitted job applications.
      </p>

      {applications.length === 0 ? (
        <div className="card p-5 text-center">
          <i className="bi bi-file-earmark-text fs-1 text-primary" />
          <h5 className="mt-3">No applications yet</h5>
          <p className="text-secondary">
            Explore opportunities and apply for suitable jobs.
          </p>
          <Link to="/jobs" className="btn btn-primary align-self-center">
            Find Jobs
          </Link>
        </div>
      ) : (
        <div className="table-responsive card p-3">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Applied On</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.location}</td>
                  <td>
                    {new Date(job.appliedAt).toLocaleDateString()}
                  </td>
                  <td>
                    <span className="badge text-bg-light border">
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default Applications;
