import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

function MUIChoiceQuestion({ questionNumber, question, choices, onSelectedAnswer}) {
  const [selectedChoice, setSelectedChoice] = React.useState("");

  const handleChange = (event) => {
    setSelectedChoice(event.target.value);
    onSelectedAnswer(event.target.labels[0].textContent);
  };

  return (
    <FormControl component="fieldset">
      <p>{questionNumber}. {question}</p>
      <RadioGroup row value={selectedChoice} onChange={handleChange}>
        {choices.map((choice, idx) => (
          <FormControlLabel
            key={idx}
            value={choice}
            control={<Radio />}
            label={`${String.fromCharCode(65 + idx)}. ${choice}`}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default MUIChoiceQuestion;