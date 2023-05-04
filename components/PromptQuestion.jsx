import React from "react";
import { TextField } from "@mui/material";


export default function PromptQuestion({ questionNumber, question, prompt, onSelectedAnswer }) {
  const [userInput, setUserInput] = React.useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    onSelectedAnswer(event.target.value);
  };
  return (
    <>
      <p>
        {questionNumber}. {question}
      </p>
      <p>
        {prompt} {".".repeat(question.length * 1.5)}
      </p>
      <TextField fullWidth value={userInput} onChange={handleInputChange} />
    </>
  );
}
