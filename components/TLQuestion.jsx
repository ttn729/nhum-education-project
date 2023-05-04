import { TextField } from "@mui/material";
import React from "react";

export default function TLQuestion({
  questionNumber,
  question,
  onSelectedAnswer,
}) {
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
      <p>{".".repeat(question.length * 1.5)}</p>
      <TextField fullWidth value={userInput} onChange={handleInputChange} />
    </>
  );
}
