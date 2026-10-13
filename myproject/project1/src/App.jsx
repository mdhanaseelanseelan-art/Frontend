import { useState } from "react";
import "./App.css";
import Departments from "./Departments";
import ComplaintDetails from "./ComplaintDetails.jsx";
import SubmissionSuccess from "./SubmissionSuccess.jsx";

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedComplaint, setSubmittedComplaint] = useState(null);
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showDepartments, setShowDepartments] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");


  const changeMode = (loginMode) => {
  setIsLogin(loginMode);
  setMessage("");
  setShowPassword(false);
};
      
    
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (isLogin) {
      setShowDepartments(true);
      setMessage("");
    } else {
      setMessage(
        "Registration demo completed! You can now try the login form."
      );
      setIsLogin(true);
    }
  };

  if (showSuccess && submittedComplaint) {
  return (
    <SubmissionSuccess
      complaint={submittedComplaint}
      onHome={() => {
        setShowSuccess(false);
        setSubmittedComplaint(null);
        setShowComplaintForm(false);
        setShowDepartments(false);
        setIsLogin(true);
        setMessage("");
      }}
      onNewComplaint={() => {
        setShowSuccess(false);
        setSubmittedComplaint(null);
        setShowComplaintForm(false);
        setSelectedDepartment(null);
        setShowDepartments(true);
      }}
    />
  );
}



if (showComplaintForm) {
  return (
    <ComplaintDetails
      department={selectedDepartment}
      onBack={() => {
        setShowComplaintForm(false);
        setShowDepartments(true);
      }}
      onSubmit={(complaint) => {
        setSubmittedComplaint(complaint);
        setShowComplaintForm(false);
        setShowSuccess(true);
      }}
    />
  );
}


if (showDepartments) {
  return (
    <Departments
      onContinue={(department) => {
        setSelectedDepartment(department);
        setShowComplaintForm(true);
      }}
    />
  );
}



  return (
    <div className="app-container">
      <header className="top-header">
        <div className="brand">
          <div className="brand-icon">TN</div>
          <div>
            <h2>TN PUBLIC GRIEVANCE</h2>
            <p>Complaint Priority Management System</p>
          </div>
        </div>

        <span className="header-tag">CITIZEN PORTAL</span>
      </header>

      <main className="main-content">
        <section className="welcome-section">
          <span className="eyebrow">YOUR VOICE MATTERS</span>

          <h1>
            A better Tamil Nadu
            <br />
            begins with <span>your voice.</span>
          </h1>

          <p className="welcome-description">
            Report public issues, raise your concerns and follow
            complaint progress through one simple digital platform.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon">01</span>
              <div>
                <h3>Report an Issue</h3>
                <p>Submit complaints about public services.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">02</span>
              <div>
                <h3>Smart Prioritisation</h3>
                <p>Identify urgent issues for faster review.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">03</span>
              <div>
                <h3>Track Progress</h3>
                <p>Follow the status of your complaints.</p>
              </div>
            </div>
          </div>

          <div className="info-note">
            <span className="info-dot"></span>
            A citizen-focused public grievance platform concept
          </div>
        </section>

        <section className="auth-card">
          <div className="auth-heading">
            <div className="auth-symbol">TN</div>

            <h2>{isLogin ? "Welcome back" : "Create your account"}</h2>

            <p>
              {isLogin
                ? "Sign in to access your citizen account."
                : "Register to start submitting complaints."}
            </p>
          </div>

          <div className="auth-tabs">
            <button
              type="button"
              className={isLogin ? "tab active" : "tab"}
              onClick={() => changeMode(true)}
            >
              Login
            </button>

            <button
              type="button"
              className={!isLogin ? "tab active" : "tab"}
              onClick={() => changeMode(false)}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={80}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="district">District</label>
                  <select id="district" name="district" required defaultValue="">
                    <option value="" disabled>
                      Select your district
                    </option>
                    <option>Chennai</option>
                    <option>Kanchipuram</option>
                    <option>Chengalpattu</option>
                    <option>Tiruvallur</option>
                    <option>Vellore</option>
                    <option>Coimbatore</option>
                    <option>Madurai</option>
                    <option>Tiruchirappalli</option>
                    <option>Salem</option>
                    <option>Tirunelveli</option>
                    <option>Other Tamil Nadu district</option>
                  </select>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="phone">Mobile number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  autoComplete="tel"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="password-wrapper">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={
                    isLogin ? "Enter your password" : "Create a password"
                  }
                  autoComplete={
                    isLogin ? "current-password" : "new-password"
                  }
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {!isLogin && (
                <small className="field-hint">
                  Use at least 8 characters.
                </small>
              )}
            </div>

            {isLogin && (
              <div className="form-options">
                <label className="remember-option">
                  <input type="checkbox" name="remember" />
                  <span>Remember me</span>
                </label>

                <span className="forgot-label">Forgot password?</span>
              </div>
            )}

            {!isLogin && (
              <label className="terms-option">
                <input type="checkbox" required />
                <span>
                  I agree to the terms of this demonstration platform.
                </span>
              </label>
            )}

            <button type="submit" className="submit-button">
              {isLogin ? "Sign In" : "Create Account"}
              <span aria-hidden="true"> →</span>
            </button>

            {message && (
              <p className="form-message" role="status">
                {message}
              </p>
            )}
          </form>

          <div className="switch-text">
            {isLogin ? "New to the portal?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => changeMode(!isLogin)}
            >
              {isLogin ? "Create an account" : "Sign in"}
            </button>
          </div>

          <p className="security-note">
            Frontend demonstration · No real account is created
          </p>
        </section>
      </main>

      <footer className="page-footer">
        <span>TN Public Grievance — Project Demonstration</span>
        <span>Designed for citizens of Tamil Nadu</span>
      </footer>
    </div>
  );
}

export default App;