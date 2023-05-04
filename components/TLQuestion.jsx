import { TextField } from "@mui/material";

export default function TLQuestion({ questionNumber, question }) {
  return (
    <>
      <p>
        {questionNumber}. {question}
      </p>
      <p>{".".repeat(question.length * 1.5)}</p>
      <TextField fullWidth />
    </>
  );
}
