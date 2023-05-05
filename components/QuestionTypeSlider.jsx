import React, { useState } from "react";
import Slider from "@mui/material/Slider";

export function QuestionTypeSlider({ questionTypeCounts, onSliderChange }) {
  const sliderWidth = 200; // set a fixed width for the slider container

  // create state variables for slider values
  const [sliderValues, setSliderValues] = useState({});

  // update state variables when slider values change
  const handleSliderChange = (questionType) => (event, newValue) => {
    setSliderValues((prevState) => ({
      ...prevState,
      [questionType]: newValue,
    }));

    if (onSliderChange) {
      onSliderChange({ ...sliderValues, [questionType]: newValue });
    }
  };

  return (
    <>
      {questionTypeCounts &&
        Object.entries(questionTypeCounts).map(([questionType, count]) => (
          <div
            key={questionType}
            style={{ width: `${sliderWidth}px`, marginBottom: "16px" }} // set the width and margin of the container
          >
            <span>{questionType}</span>
            <Slider
              defaultValue={0}
              step={1}
              marks={[{ value: count, label: count }]}
              min={0}
              max={count}
              valueLabelDisplay="on"
              sx={{ marginBottom: "8px" }} // set a margin for the slider
              // add onChange handler for each slider
              onChange={handleSliderChange(questionType)}
              value={sliderValues[questionType] || 0}
            />
          </div>
        ))}
    </>
  );
}
