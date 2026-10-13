
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Applications from "./pages/Applications";
import SavedJobs from "./pages/SavedJobs";
import MyResume from "./pages/MyResume";
import MySkills from "./pages/MySkills";
import InterviewPrep from "./pages/InterviewPrep";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/saved-jobs" element={<SavedJobs />} />
      <Route path="/resume" element={<MyResume />} />
      <Route path="/skills" element={<MySkills />} />
      <Route path="/interview-prep" element={<InterviewPrep />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
