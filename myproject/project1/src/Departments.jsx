
import { useState } from "react";
import "./Departments.css";

const departments = [
  {
    id: 1,
    icon: "⚡",
    title: "Electricity Department",
    description: "Power cuts, damaged poles, voltage and electrical hazards.",
    examples: ["Power failure", "Dangerous wires", "Voltage issues"],
  },
  {
    id: 2,
    icon: "🏙️",
    title: "Local Bodies & Civic Infrastructure",
    description: "Roads, drainage, garbage collection and public sanitation.",
    examples: ["Road potholes", "Drainage overflow", "Garbage collection"],
  },
  {
    id: 3,
    icon: "📄",
    title: "Land Registration & Revenue Services",
    description: "Patta, land records, registration and revenue certificates.",
    examples: ["Patta issues", "Record corrections", "Registration delays"],
  },
  {
    id: 4,
    icon: "📡",
    title: "Telecom & Network Services",
    description: "Mobile signal, broadband and internet connectivity.",
    examples: ["Poor mobile signal", "Internet outage", "Broadband issues"],
  },
  {
    id: 5,
    icon: "💧",
    title: "Water Supply & Water Resources",
    description: "Drinking water, pipeline leaks and water quality.",
    examples: ["Water shortage", "Pipe leakage", "Contaminated water"],
  },
  {
    id: 6,
    icon: "🚌",
    title: "Public Transport & Roads",
    description: "Public transport services, bus stops and road safety.",
    examples: ["Bus service issues", "Unsafe bus stops", "Road maintenance"],
  },
  {
    id: 7,
    icon: "🏥",
    title: "Public Health & Government Hospitals",
    description: "Hospital services, cleanliness and public health hazards.",
    examples: ["Sanitation issues", "Facility complaints", "Health hazards"],
  },
  {
    id: 8,
    icon: "🏛️",
    title: "Other Government Services",
    description: "Welfare schemes, pension delays and other public services.",
    examples: ["Pension delays", "Welfare services", "Certificate delays"],
  },
];

function Departments({ onContinue }) {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filteredDepartments = departments.filter((department) => {
    const text = [
      department.title,
      department.description,
      ...department.examples,
    ].join(" ").toLowerCase();

    return text.includes(search.toLowerCase());
  });

  const handleContinue = () => {
    if (!selected) return;

    const department = departments.find((item) => item.id === selected);
    onContinue(department);
  };

  return (
    <div className="department-page">
      <header className="dept-header">
        <div className="dept-brand">
          <div className="dept-logo">TN</div>
          <div>
            <h2>TN PUBLIC GRIEVANCE</h2>
            <p>Complaint Priority Management System</p>
          </div>
        </div>

        <span className="dept-header-label">CITIZEN PORTAL</span>
      </header>

      <main className="dept-main">
        <div className="dept-breadcrumb">
          <span>Citizen Portal</span>
          <span> / </span>
          <strong>Choose Department</strong>
        </div>

        <section className="dept-intro">
          <span className="dept-eyebrow">PUBLIC GRIEVANCE SERVICES</span>

          <h1>
            Where would you like
            <br />
            to <span>raise your complaint?</span>
          </h1>

          <p>
            Select the department related to your issue. We will guide
            you to the appropriate complaint form.
          </p>
        </section>

        <div className="dept-toolbar">
          <div>
            <h2>Choose a department</h2>
            <p>{filteredDepartments.length} departments available</p>
          </div>

          <input
            type="search"
            className="dept-search"
            placeholder="Search departments..."
            aria-label="Search departments"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <section className="dept-grid">
          {filteredDepartments.map((department) => (
            <button
              type="button"
              key={department.id}
              className={`dept-card ${
                selected === department.id ? "selected" : ""
              }`}
              onClick={() => setSelected(department.id)}
              aria-pressed={selected === department.id}
            >
              <div className="dept-card-top">
                <span className="dept-icon">{department.icon}</span>

                <span className="dept-radio">
                  {selected === department.id ? "✓" : ""}
                </span>
              </div>

              <h3>{department.title}</h3>
              <p className="dept-description">
                {department.description}
              </p>

              <div className="dept-examples">
                {department.examples.map((example) => (
                  <span key={example} className="dept-chip">
                    {example}
                  </span>
                ))}
              </div>

              <span className="dept-select-label">
                {selected === department.id
                  ? "Department selected"
                  : "Select this department →"}
              </span>
            </button>
          ))}
        </section>

        {filteredDepartments.length === 0 && (
          <div className="dept-empty">
            No departments found. Try another search term.
          </div>
        )}

        <div className="dept-bottom">
          <p>
            <strong>Not sure where your issue belongs?</strong>
            <br />
            Select Other Government Services or review the categories above.
          </p>

          <button
            type="button"
            className="dept-continue"
            disabled={!selected}
            onClick={handleContinue}
          >
            Continue to Complaint Form <span>→</span>
          </button>
        </div>

        <p className="dept-disclaimer">
          Student project demonstration · Not an official government portal
        </p>
      </main>
    </div>
  );
}

export default Departments;
