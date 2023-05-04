import React from "react";
import MUIChoiceQuestion from "./MUIChoiceQuestion";
import OnlineSubmit from "./OnlineSubmit";
import TLQuestion from "./TLQuestion";
import PromptQuestion from "./PromptQuestion";

export default function OnlineMode({ data, error }) {
  const [answers, setAnswers] = React.useState([]);

  const handleSelectedAnswer = (answer, idx) => {
    const newAnswers = [...answers];
    newAnswers[idx] = answer;
    setAnswers(newAnswers);
  };

  return (
    <>
      <div style={{ marginTop: "3rem" }}>
        {error
          ? error
          : data.map((col, idx) => (
              <div key={idx}>
                {col.QuestionType === "MC" ? (
                  <MUIChoiceQuestion
                    key={idx}
                    questionNumber={idx + 1}
                    question={col.Question}
                    choices={[
                      col.Choice1,
                      col.Choice2,
                      col.Choice3,
                      col.Choice4,
                    ]}
                    onSelectedAnswer={(answer) =>
                      handleSelectedAnswer(answer, idx)
                    }
                  />
                ) : col.QuestionType === "TL" ? (
                  <TLQuestion
                    questionNumber={idx + 1}
                    question={col.Question}
                  />
                ) : col.QuestionType === "Prompt" ? (
                  <PromptQuestion
                    questionNumber={idx + 1}
                    question={col.Question}
                    prompt={col.Prompt}
                  />
                ) : (
                  <p>
                    {idx + 1}. {col.Question}
                  </p>
                )}
              </div>
            ))}
      </div>

      <OnlineSubmit answers={answers} />
    </>
  );
}
