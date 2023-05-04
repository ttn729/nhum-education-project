import { TextField } from "@mui/material";

export default function PromptQuestion({ questionNumber, question, prompt }) {
  return (
    <>
      <p>
        {questionNumber}. {question}
      </p>
      <p>{prompt} {".".repeat(question.length * 1.5)}</p>
      <TextField fullWidth />
    </>
  );
}
