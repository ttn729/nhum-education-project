import { Box } from "@mui/material";
import React, { useState } from "react";

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function ArraySwap({ questionNumber, question, onSelectedAnswer  }) {
  let words = question.split("/");
  shuffleArray(words);
  const [questions, setQuestions] = useState(words);
  const [answers, setAnswers] = useState([]);

  const handleSwap = (index, source, destination) => {
    const item = source[index];
    source.splice(index, 1);
    destination.push(item);
    setQuestions([...questions]);
    setAnswers([...answers]);

    if (questions.length == 0) {
        onSelectedAnswer(answers.join(''))
    }
    
  };

  return (
    <div>
      <p>{questionNumber}.</p>
      <Box sx={{ display: "flex"}}>
        {questions.map((question, index) => (
          <Box
            sx={{ backgroundColor: "aliceblue", border: '1px solid #84c5fe', padding: 2 }}
            key={index}
            onClick={() => handleSwap(index, questions, answers)}
            style={{ marginRight: "10px" }}
          >
            <p>{question}</p>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", backgroundColor: "aliceblue", minHeight: '2vw', mt:2 }}>
        {answers.map((answer, index) => (
          <Box
            sx={{ backgroundColor: "skyblue", padding: 2 }}
            key={index}
            onClick={() => handleSwap(index, answers, questions)}
            style={{ marginRight: "20px" }}
          >
            <p>{answer}</p>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default ArraySwap;
