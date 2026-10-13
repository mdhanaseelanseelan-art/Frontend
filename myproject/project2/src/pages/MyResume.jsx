
import { useState } from "react";

function MyResume() {
  const [fileName, setFileName] = useState(
    localStorage.getItem("ideaResumeName") || ""
  );
  const [message, setMessage] = useState("");

  function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const isPDF = file.type === "application/pdf";

    if (!isPDF) {
      setMessage("Please select a PDF resume.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("File size must be 5 MB or less.");
      event.target.value = "";
      return;
    }

    setFileName(file.name);
    localStorage.setItem("ideaResumeName", file.name);
    setMessage(
      "Filename saved for this demo. Upload the file to a backend to store the actual resume."
    );
  }

  return (
    <main className="container-fluid p-4">
      <h2 className="fw-bold">My Resume</h2>
      <p className="text-secondary">
        Keep your resume ready for job applications.
      </p>

      <div className="card p-4" style={{ maxWidth: 650 }}>
        <i className="bi bi-file-earmark-pdf fs-1 text-primary mb-3" />
        <h5>Upload Your Resume</h5>
        <p className="text-secondary">
          PDF format only. Maximum size: 5 MB.
        </p>

        <input
          type="file"
          accept=".pdf,application/pdf"
          className="form-control"
          onChange={handleUpload}
        />

        {fileName && (
          <div className="alert alert-light border mt-3">
            <i className="bi bi-file-earmark-pdf me-2" />
            {fileName}
          </div>
        )}

        {message && (
          <div className="alert alert-info mt-3">{message}</div>
        )}
      </div>
    </main>
  );
}

export default MyResume;
