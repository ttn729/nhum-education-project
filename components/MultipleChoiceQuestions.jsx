import React from "react";

function MultipleChoiceQuestion({ question, choices }) {
  return (
    <div>
      <p>{question}</p>
      {choices.map((choice, idx) => (
        <label key={idx}>
          <input type="radio" name={question} value={choice} />
          {choice} &emsp;
        </label>
      ))}
    </div>
  );
}

export default MultipleChoiceQuestion;
