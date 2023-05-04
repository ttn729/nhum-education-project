import { Box } from "@mui/material";
import React, { useState } from "react";

function ArraySwap() {
  const [questions, setQuestions] = useState([
    "nếu",
    "anh",
    "không",
    "phiền",
    "làm",
    "người yêu",
    "em",
    "đi",
  ]);
  const [answers, setAnswers] = useState([]);

  const handleSwap = (index, source, destination) => {
    const item = source[index];
    source.splice(index, 1);
    destination.push(item);
    setQuestions([...questions]);
    setAnswers([...answers]);
  };

  return (
    <div>
      <h3>Questions:</h3>
      <div style={{ display: "flex" }}>
        {questions.map((question, index) => (
          <Box
            sx={{ backgroundColor: "aliceblue" }}
            key={index}
            onClick={() => handleSwap(index, questions, answers)}
            style={{ marginRight: "10px" }}
          >
            {question}
          </Box>
        ))}
      </div>

      <h3>Answers:</h3>
      <Box sx={{ display: "flex", backgroundColor: "aliceblue" }}>
        {answers.map((answer, index) => (
          <Box
            sx={{ backgroundColor: "skyblue" }}
            key={index}
            onClick={() => handleSwap(index, answers, questions)}
            style={{ marginRight: "10px" }}
          >
            {answer}
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default ArraySwap;
