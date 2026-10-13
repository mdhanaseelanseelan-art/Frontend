
import { useState } from "react";
import "./ComplaintDetails.css";

const districtTaluks = {
  Chennai: ["Egmore", "Mylapore", "Guindy", "Ambattur", "Tondiarpet"],
  Kanchipuram: ["Kanchipuram", "Kundrathur", "Uthiramerur", "Sriperumbudur"],
  Chengalpattu: ["Chengalpattu", "Tambaram", "Tirukalukundram", "Vandalur"],
  Tiruvallur: ["Tiruvallur", "Ponneri", "Poonamallee", "Avadi"],
  Vellore: ["Vellore", "Katpadi", "Gudiyatham"],
  Coimbatore: ["Coimbatore North", "Coimbatore South", "Pollachi"],
  Madurai: ["Madurai North", "Madurai South", "Melur"],
  Salem: ["Salem", "Attur", "Mettur"],
  Tiruchirappalli: ["Srirangam", "Tiruchirappalli West", "Lalgudi"],
  Tirunelveli: ["Tirunelveli", "Ambasamudram", "Palayamkottai"],
};

const complaintTypes = {
  "Electricity Department": [
    "Power outage",
    "Damaged electric pole",
    "Dangerous electrical wire",
    "Low voltage",
    "Other electricity issue",
  ],
  "Local Bodies & Civic Infrastructure": [
    "Road damage / pothole",
    "Drainage overflow",
    "Garbage not collected",
    "Streetlight not working",
    "Public sanitation",
    "Other civic issue",
  ],
  "Land Registration & Revenue Services": [
    "Patta / Chitta issue",
    "Land record correction",
    "Registration delay",
    "Revenue certificate issue",
    "Other land / revenue issue",
  ],
  "Telecom & Network Services": [
    "Poor mobile signal",
    "Internet outage",
    "Broadband issue",
    "Repeated network failure",
    "Other network issue",
  ],
  "Water Supply & Water Resources": [
    "Water shortage",
    "Pipeline leakage",
    "Water quality issue",
    "Other water issue",
  ],
  "Public Transport & Roads": [
    "Bus service issue",
    "Unsafe bus stop",
    "Road maintenance",
    "Other transport issue",
  ],
  "Public Health & Government Hospitals": [
    "Hospital cleanliness",
    "Public health hazard",
    "Government hospital service",
    "Other health issue",
  ],
  "Other Government Services": [
    "Pension / welfare issue",
    "Certificate delay",
    "Government service delay",
    "Other issue",
  ],
};

function ComplaintDetails({ department, onBack, onSubmit }) {
  const [district, setDistrict] = useState("");
  const [taluk, setTaluk] = useState("");
  const [place, setPlace] = useState("");
  const [address, setAddress] = useState("");
  const [complaintType, setComplaintType] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  const departmentName =
    typeof department === "string"
      ? department
      : department?.title || "";

  const types =
    complaintTypes[departmentName] ||
    ["General complaint", "Other issue"];

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!district || !taluk || !place || !complaintType) {
      setError("Please complete all required location and complaint fields.");
      return;
    }

    const complaint = {
      id: `TN-${Date.now().toString().slice(-8)}`,
      department: departmentName,
      district,
      taluk,
      place,
      address,
      complaintType,
      subject,
      description,
      photoName: photo?.name || "",
      submittedAt: new Date().toLocaleString(),
      status: "Submitted",
    };

    onSubmit(complaint);
  };

  return (
    <div className="complaint-page">
      <header className="complaint-header">
        <div className="complaint-brand">
          <div className="complaint-logo">TN</div>
          <div>
            <h2>TN PUBLIC GRIEVANCE</h2>
            <p>Complaint Priority Management System</p>
          </div>
        </div>

        <span className="complaint-portal-label">CITIZEN PORTAL</span>
      </header>

      <main className="complaint-main">
        <button className="back-button" type="button" onClick={onBack}>
          ← Back to departments
        </button>

        <section className="complaint-intro">
          <span className="complaint-eyebrow">COMPLAINT REGISTRATION</span>
          <h1>Tell us about the problem</h1>
          <p>
            Provide the location and details so your complaint can be
            classified for review.
          </p>
        </section>

        <div className="selected-department">
          <span className="selected-department-icon">🏢</span>
          <div>
            <small>SELECTED DEPARTMENT</small>
            <h3>{departmentName || "Department not selected"}</h3>
          </div>
        </div>

        <form className="complaint-form" onSubmit={handleSubmit}>
          <section className="form-section">
            <div className="section-heading">
              <span>01</span>
              <div>
                <h2>Problem location</h2>
                <p>Where is the problem happening?</p>
              </div>
            </div>

            <div className="complaint-fields">
              <div className="complaint-field">
                <label htmlFor="district">District *</label>
                <select
                  id="district"
                  value={district}
                  onChange={(event) => {
                    setDistrict(event.target.value);
                    setTaluk("");
                  }}
                  required
                >
                  <option value="">Select district</option>
                  {Object.keys(districtTaluks).sort().map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                  <option value="Other">Other district</option>
                </select>
              </div>

              <div className="complaint-field">
                <label htmlFor="taluk">Taluk *</label>
                <select
                  id="taluk"
                  value={taluk}
                  onChange={(event) => setTaluk(event.target.value)}
                  required
                  disabled={!district || district === "Other"}
                >
                  <option value="">Select taluk</option>
                  {(districtTaluks[district] || []).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="complaint-field">
                <label htmlFor="place">Town / Village *</label>
                <input
                  id="place"
                  value={place}
                  onChange={(event) => setPlace(event.target.value)}
                  placeholder="Enter town, village or area"
                  required
                />
              </div>

              <div className="complaint-field full-width">
                <label htmlFor="address">Street / Exact location</label>
                <textarea
                  id="address"
                  rows="2"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Street name, landmark or nearby location"
                />
              </div>
            </div>
          </section>

          <section className="form-section">
            <div className="section-heading">
              <span>02</span>
              <div>
                <h2>Complaint information</h2>
                <p>Explain what you want to report.</p>
              </div>
            </div>

            <div className="complaint-fields">
              <div className="complaint-field full-width">
                <label htmlFor="complaintType">Type of complaint *</label>
                <select
                  id="complaintType"
                  value={complaintType}
                  onChange={(event) => setComplaintType(event.target.value)}
                  required
                >
                  <option value="">Select complaint type</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="complaint-field full-width">
                <label htmlFor="subject">Complaint subject</label>
                <input
                  id="subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  maxLength="120"
                  placeholder="Briefly describe the problem"
                />
              </div>

              <div className="complaint-field full-width">
                <label htmlFor="description">Detailed description *</label>
                <textarea
                  id="description"
                  rows="5"
                  minLength="10"
                  maxLength="2000"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Explain the problem, when it started and how it affects people..."
                  required
                />
                <small className="character-count">
                  {description.length}/2000 characters
                </small>
              </div>

              <div className="complaint-field full-width">
                <label htmlFor="photo">Upload problem photo (optional)</label>
                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files?.[0];

                    if (file && file.size > 5 * 1024 * 1024) {
                      setError("Please choose an image smaller than 5 MB.");
                      event.target.value = "";
                      setPhoto(null);
                      return;
                    }

                    setError("");
                    setPhoto(file || null);
                  }}
                />
                <small className="upload-hint">
                  Image files only · Maximum size 5 MB
                </small>
              </div>
            </div>
          </section>

          {error && (
            <p className="complaint-error" role="alert">
              {error}
            </p>
          )}

          <div className="complaint-actions">
            <p>
              <strong>Before submitting:</strong>
              <br />
              Check that the location and complaint details are accurate.
            </p>

            <button type="submit" className="complaint-submit">
              Continue  <span>→</span>
            </button>
          </div>
        </form>

        <p className="complaint-disclaimer">
          Frontend project demonstration · Not an official government portal
        </p>
      </main>
    </div>
  );
}

export default ComplaintDetails;
