
import { Link } from "react-router-dom";

function Jobs() {
  return (
    <main className="container py-5">
      <h1>Find Your Next Opportunity</h1>
      <p>Explore IT, manufacturing and technical jobs.</p>

      <Link to="/jobs/101" className="btn btn-primary">
        View Job Details
      </Link>
    </main>
  );
}

export default Jobs;
