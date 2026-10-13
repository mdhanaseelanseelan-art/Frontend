
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("ideaUsers") || "[]"
    );

    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email.trim().toLowerCase() &&
        item.password === password
    );

    if (!user) {
      setError("Account not found or password is incorrect. Please register first.");
      return;
    }

    localStorage.setItem(
      "ideaCurrentUser",
      JSON.stringify({ name: user.name, email: user.email })
    );

    navigate("/");
  }

  return (
    <main className="container py-5">
      <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: 450 }}>
        <h2 className="fw-bold text-center">Welcome Back</h2>
        <p className="text-secondary text-center">
          Sign in to your IDEA account.
        </p>

        <form onSubmit={handleSubmit}>
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
            required
          />

          {error && <div className="alert alert-danger">{error}</div>}

          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
