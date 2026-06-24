import React, { useState } from 'react';
import './QuizBuilder.css';

export default function QuizBuilder() {
  const [quizTitle, setQuizTitle] = useState('');
  const [classLevel, setClassLevel] = useState('Senior 1');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionText: '',
      options: ['', '', '', ''],
      correctAnswerIndex: 0,
    }
  ]);

  // Add a fresh, blank question to the array
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        questionText: '',
        options: ['', '', '', ''],
        correctAnswerIndex: 0,
      }
    ]);
  };

  // Remove a specific question
  const handleRemoveQuestion = (id) => {
    if (questions.length === 1) return; // Keep at least one question
    setQuestions(questions.filter(q => q.id !== id));
  };

  // Update specific question text
  const handleQuestionTextChange = (id, text) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, questionText: text } : q));
  };

  // Update a single option variant string inside a question
  const handleOptionChange = (qId, optionIdx, value) => {
    setQuestions(questions.map(q => {
      if (q.id === qId) {
        const newOptions = [...q.options];
        newOptions[optionIdx] = value;
        return { ...q, options: newOptions };
      }
      return q;
    }));
  };

  // Pick which index holds the correct answer formula
  const handleCorrectAnswerChange = (qId, optionIdx) => {
    setQuestions(questions.map(q => q.id === qId ? { ...q, correctAnswerIndex: optionIdx } : q));
  };

  // Log or send final quiz configuration payload
  const handleSaveQuiz = (e) => {
    e.preventDefault();
    const quizPayload = {
      title: quizTitle || 'Untitled Quiz',
      level: classLevel,
      totalQuestions: questions.length,
      questions: questions,
    };
    console.log('Saved Quiz Configuration Payload:', quizPayload);
    alert(`Quiz "${quizPayload.title}" saved successfully with ${quizPayload.totalQuestions} questions!`);
  };

  return (
    <div className="builder-container">
      <header className="builder-header">
        <div>
          <h2>Create Assessment Quiz</h2>
          <p>Design multi-choice evaluations with instant grading feedback rules.</p>
        </div>
        <button type="button" onClick={handleSaveQuiz} className="btn-save">
          Save Quiz Template
        </button>
      </header>

      <form onSubmit={handleSaveQuiz} className="builder-form">
        {/* Meta Configuration Info */}
        <div className="meta-card">
          <div className="form-group">
            <label htmlFor="quiz-title">Quiz Title</label>
            <input
              id="quiz-title"
              type="text"
              placeholder="e.g., Atomic Structure & Elements"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="class-level">Target Class Level</label>
            <select
              id="class-level"
              value={classLevel}
              onChange={(e) => setClassLevel(e.target.value)}
            >
              <option value="Senior 1">Senior 1</option>
              <option value="Senior 2">Senior 2</option>
              <option value="Senior 3">Senior 3</option>
              <option value="Senior 4">Senior 4</option>
            </select>
          </div>
        </div>

        {/* Dynamic Questions Workspace Iteration */}
        <div className="questions-stack">
          {questions.map((question, index) => (
            <div key={question.id} className="question-card">
              <div className="card-header">
                <h3>Question {index + 1}</h3>
                {questions.length > 1 && (
                  <button
                    type="button"
                    className="btn-delete"
                    onClick={() => handleRemoveQuestion(question.id)}
                  >
                    Delete Question
                  </button>
                )}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="question-input"
                  placeholder="Enter your query or problem scenario here..."
                  value={question.questionText}
                  onChange={(e) => handleQuestionTextChange(question.id, e.target.value)}
                  required
                />
              </div>

              <div className="options-grid">
                {question.options.map((option, optIdx) => (
                  <div key={optIdx} className="option-row">
                    <label className="radio-container">
                      <input
                        type="radio"
                        name={`correct-${question.id}`}
                        checked={question.correctAnswerIndex === optIdx}
                        onChange={() => handleCorrectAnswerChange(question.id, optIdx)}
                      />
                      <span className="radio-mark"></span>
                    </label>
                    <input
                      type="text"
                      placeholder={`Option ${String.fromCharCode(65 + optIdx)}`}
                      value={option}
                      onChange={(e) => handleOptionChange(question.id, optIdx, e.target.value)}
                      required
                    />
                  </div>
                ))}
              </div>
              <p className="hint-text">Select the radio button next to the correct answer alternative.</p>
            </div>
          ))}
        </div>

        <button type="button" onClick={handleAddQuestion} className="btn-add-question">
          + Add Another Question
        </button>
      </form>
    </div>
  );
}