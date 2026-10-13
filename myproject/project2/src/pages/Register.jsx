
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Job Seeker");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("ideaUsers") || "[]"
    );

    const alreadyExists = users.some(
      (user) => user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (alreadyExists) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password,
      role,
    };

    localStorage.setItem(
      "ideaUsers",
      JSON.stringify([...users, newUser])
    );

    setError("");
    navigate("/login");
  }

  return (
    <main className="container py-5">
      <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: 500 }}>
        <h2 className="fw-bold text-center">Create Your Account</h2>
        <p className="text-secondary text-center">
          Join IDEA and explore career opportunities.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="form-label">Full Name</label>
          <input
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />

          <label className="form-label">I am a</label>
          <select
            className="form-select mb-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Job Seeker</option>
            <option>Employer</option>
          </select>

          {error && <div className="alert alert-danger">{error}</div>}

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
