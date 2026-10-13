
import { useParams, Link } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  return (
    <main className="container py-5">
      <h1>Job Details</h1>
      <p>Selected job ID: {id}</p>

      <button className="btn btn-primary">
        Apply Now
      </button>

      <Link to="/jobs" className="btn btn-outline-secondary ms-2">
        Back to Jobs
      </Link>
    </main>
  );
}

export default JobDetails;
