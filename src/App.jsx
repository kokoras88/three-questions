// File: src/components/App.jsx
import React, { useState } from "react";
import "./App.css";
import questions from "./data/questions";
import ryanairLogo from "./assets/ryanair.png";

const getRandomQuestion = (category) => {
  const categoryQuestions = questions[category];
  const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
  return categoryQuestions[randomIndex];
};

const App = () => {
  const [selectedQuestions, setSelectedQuestions] = useState({
    security: getRandomQuestion("security"),
    safety: getRandomQuestion("safety"),
    firstAid: getRandomQuestion("firstAid")
  });
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const regenerateQuestions = () => {
    setSelectedQuestions({
      security: getRandomQuestion("security"),
      safety: getRandomQuestion("safety"),
      firstAid: getRandomQuestion("firstAid")
    });
    setCurrentAnswer(null);
  };

  return (
    <div className="app-container">
      <div className="title">
        <img src={ryanairLogo} alt="Ryanair Logo" className="title-logo" />
      </div>
      <div className="questions-container">
        <div
          className="question-card"
          onClick={() => setCurrentAnswer(selectedQuestions.security.answer)}
        >
          <h2>Security</h2>
          <p>{selectedQuestions.security.question}</p>
        </div>
        <div
          className="question-card"
          onClick={() => setCurrentAnswer(selectedQuestions.safety.answer)}
        >
          <h2>Safety</h2>
          <p>{selectedQuestions.safety.question}</p>
        </div>
        <div
          className="question-card"
          onClick={() => setCurrentAnswer(selectedQuestions.firstAid.answer)}
        >
          <h2>First Aid</h2>
          <p>{selectedQuestions.firstAid.question}</p>
        </div>
      </div>
      <button className="regenerate-button" onClick={regenerateQuestions}>Regenerate Questions</button>
      {currentAnswer && (
        <div className="answer-container">
          <h2>Answer:</h2>
          <p>{currentAnswer}</p>
        </div>
      )}
    </div>
  );
};

export default App;
