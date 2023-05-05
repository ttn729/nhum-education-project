import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function MUIChoiceQuestion({
  questionNumber,
  question,
  choices,
  onSelectedAnswer,
}) {
  const [selectedChoice, setSelectedChoice] = React.useState("");

  const handleChange = (event) => {
    setSelectedChoice(event.target.value);
    onSelectedAnswer(event.target.labels[0].textContent);
  };

  return (
    <FormControl component="fieldset">
      <p>
        {questionNumber}. {question}
      </p>
      <RadioGroup row value={selectedChoice} onChange={handleChange}>
        {choices.map((choice, idx) => (
          <FormControlLabel
            key={idx}
            value={choice}
            control={<Radio />}
            label={
              <Box sx={{ fontSize: "20px", padding:2 }}>
                {`${String.fromCharCode(65 + idx)}. ${choice}`}
              </Box>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
