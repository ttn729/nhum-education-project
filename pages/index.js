import React, { useState } from "react";
import { Parsing } from "@/components/Parsing";
import { Inter } from "next/font/google";
import OfflineMode from "@/components/OfflineMode";
import OnlineMode from "@/components/OnlineMode";
import { Button } from "@mui/material";
import { QuestionTypeSlider } from "@/components/QuestionTypeSlider";

const inter = Inter({ subsets: ["latin"] });

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  // This state will store the parsed data
  const [data, setData] = useState([]);

  const [onlineMode, setOnlineMode] = React.useState(false);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  const [randomize, setRandomize] = useState(false);

  const [questionTypes, setQuestionTypes] = useState([]);

  const [sliderValues, setSliderValues] = useState({});

  const [filteredQuestions, setFilteredQuestions] = useState([]);

  // callback function to receive updated slider values from QuestionTypeSlider component
  const handleSliderChange = (newSliderValues) => {
    setSliderValues(newSliderValues);
  };

  function onClickRandom() {
    // Shuffle the questions
    const shuffledData = shuffle(data);
  
    // Pick questions based on slider values
    const filteredQuestions = Object.keys(sliderValues).flatMap(type =>
      shuffledData.filter(q => q.QuestionType === type).slice(0, sliderValues[type])
    );
  
    setFilteredQuestions(filteredQuestions);
  
    setRandomize(!randomize);
  }
  
  

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Parsing
        setData={setData}
        setOnlineMode={setOnlineMode}
        setError={setError}
        setQuestionTypes={setQuestionTypes}
      />

      <QuestionTypeSlider
        questionTypeCounts={questionTypes}
        onSliderChange={handleSliderChange}
      />

      <Button onClick={onClickRandom}>Randomize</Button>

      {randomize ? (
        onlineMode ? (
          <OnlineMode data={filteredQuestions} error={error} />
        ) : (
          <OfflineMode data={filteredQuestions} error={error} />
        )
      ) : null}
    </main>
  );
}
