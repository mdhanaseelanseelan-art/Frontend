
import { useState } from "react";

const practiceContent = {
  Technical: [
    {
      question: "What is HTML?",
      answer: "HTML is the markup language used to structure web pages.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is CSS?",
      answer: "CSS is used to style and lay out web pages.",
    },
  ],
  HR: [
    {
      question: "Tell me about yourself.",
      answer: "Introduce your education, skills, projects and career goals.",
    },
    {
      question: "What are your strengths?",
      answer: "Explain genuine strengths and support them with an example.",
    },
    {
      question: "Why should we hire you?",
      answer: "Connect your skills, willingness to learn and suitability to the role.",
    },
  ],
  Manufacturing: [
    {
      question: "What is quality control?",
      answer: "Quality control checks products against required quality standards.",
    },
    {
      question: "What is 5S?",
      answer: "Sort, Set in order, Shine, Standardize and Sustain.",
    },
    {
      question: "Why is industrial safety important?",
      answer: "It helps prevent accidents, injuries and unsafe working conditions.",
    },
  ],
  Aptitude: [
    {
      question: "What is 20% of 250?",
      answer: "50. Calculate 250 × 20 / 100.",
    },
    {
      question: "A machine makes 60 parts in 3 hours. How many per hour?",
      answer: "20 parts per hour. Divide 60 by 3.",
    },
    {
      question: "Find the next number: 2, 4, 8, 16, ?",
      answer: "32. Each number is multiplied by 2.",
    },
  ],
};

function InterviewPrep() {
  const [category, setCategory] = useState("Technical");
  const [revealed, setRevealed] = useState({});

  return (
    <main className="container-fluid p-4">
      <h2 className="fw-bold">Interview Preparation</h2>
      <p className="text-secondary">
        Practice for IT, HR, manufacturing and aptitude interviews.
      </p>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {Object.keys(practiceContent).map((item) => (
          <button
            key={item}
            className={`btn ${
              category === item
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => {
              setCategory(item);
              setRevealed({});
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {practiceContent[category].map((item, index) => {
        const key = `${category}-${index}`;

        return (
          <div className="card p-4 mb-3" key={key}>
            <h5>
              {index + 1}. {item.question}
            </h5>

            {revealed[key] && (
              <div className="alert alert-light border mt-3 mb-0">
                <strong>Answer:</strong> {item.answer}
              </div>
            )}

            <button
              className="btn btn-outline-primary align-self-start mt-3"
              onClick={() =>
                setRevealed((previous) => ({
                  ...previous,
                  [key]: !previous[key],
                }))
              }
            >
              {revealed[key] ? "Hide Answer" : "Show Answer"}
            </button>
          </div>
        );
      })}
    </main>
  );
}

export default InterviewPrep;
