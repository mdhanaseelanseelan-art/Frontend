
import { useState } from "react";

const skillGroups = {
  "IT & Software": [
    "HTML", "CSS", "JavaScript", "React", "Java", "SQL", "Git"
  ],
  Manufacturing: [
    "Production Planning", "Quality Control", "5S", "Lean Manufacturing",
    "Industrial Safety", "Machine Operations"
  ],
  Technical: [
    "Electrical Maintenance", "Mechanical Drawing",
    "Troubleshooting", "Equipment Maintenance"
  ],
};

function MySkills() {
  const [category, setCategory] = useState("IT & Software");

  const [skills, setSkills] = useState(() =>
    JSON.parse(localStorage.getItem("ideaSkills") || "{}")
  );

  function toggleSkill(skill) {
    const updated = {
      ...skills,
      [skill]: !skills[skill],
    };

    setSkills(updated);
    localStorage.setItem("ideaSkills", JSON.stringify(updated));
  }

  const selectedCount = skillGroups[category].filter(
    (skill) => skills[skill]
  ).length;

  return (
    <main className="container-fluid p-4">
      <h2 className="fw-bold">My Skills</h2>
      <p className="text-secondary">
        Select the skills you have learned or practiced.
      </p>

      <div className="card p-4" style={{ maxWidth: 750 }}>
        <label className="form-label fw-semibold">
          Choose your career category
        </label>

        <select
          className="form-select mb-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Object.keys(skillGroups).map((group) => (
            <option key={group}>{group}</option>
          ))}
        </select>

        <h5>{category}</h5>
        <p className="text-secondary">
          {selectedCount} of {skillGroups[category].length} skills selected
        </p>

        <div className="d-flex flex-wrap gap-2">
          {skillGroups[category].map((skill) => (
            <label
              key={skill}
              className={`border rounded-3 p-3 ${
                skills[skill] ? "border-primary bg-light" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={!!skills[skill]}
                onChange={() => toggleSkill(skill)}
              />
              {skill}
            </label>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MySkills;
