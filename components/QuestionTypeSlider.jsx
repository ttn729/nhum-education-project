import React from "react";
import Slider from "@mui/material/Slider";

export function QuestionTypeSlider() {
  const questionTypeCounts = { MC: 7, Rearrange: 8, Prompt: 5 };
  const sliderWidth = 200; // set a fixed width for the slider container

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
            />
          </div>
        ))}
    </>
  );
}
