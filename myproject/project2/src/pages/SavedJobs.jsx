
import { Link } from "react-router-dom";
import { useState } from "react";

function SavedJobs() {
  const [jobs, setJobs] = useState(() =>
    JSON.parse(localStorage.getItem("ideaSavedJobs") || "[]")
  );

  function removeJob(id) {
    const updated = jobs.filter((job) => job.id !== id);
    localStorage.setItem("ideaSavedJobs", JSON.stringify(updated));
    setJobs(updated);
  }

  return (
    <main className="container-fluid p-4">
      <h2 className="fw-bold">Saved Jobs</h2>
      <p className="text-secondary">
        Opportunities you want to explore later.
      </p>

      {jobs.length === 0 ? (
        <div className="card p-5 text-center">
          <i className="bi bi-bookmark fs-1 text-primary" />
          <h5 className="mt-3">No saved jobs</h5>
          <p className="text-secondary">
            Save jobs from their details page to find them here.
          </p>
          <Link to="/jobs" className="btn btn-primary align-self-center">
            Explore Jobs
          </Link>
        </div>
      ) : (
        <div className="row g-3">
          {jobs.map((job) => (
            <div className="col-md-6 col-xl-4" key={job.id}>
              <div className="card job-card h-100">
                <div className="card-body">
                  <h5 className="fw-bold">{job.title}</h5>
                  <p className="text-secondary">{job.company}</p>
                  <p>{job.location} · {job.salary}</p>

                  <div className="d-flex gap-2">
                    <Link
                      to={`/jobs/${job.id}`}
                      className="btn btn-primary"
                    >
                      View Job
                    </Link>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => removeJob(job.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default SavedJobs;
