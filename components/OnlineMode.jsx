import { TextField } from "@mui/material";
import MUIChoiceQuestion from "./MUIChoiceQuestion";

export default function OnlineMode({ data, error }) {
  return (
    <div style={{ marginTop: "3rem" }}>
      {error
        ? error
        : data.map((col, idx) => (
            <div key={idx}>
              {col.QuestionType === "MC" ? (
                <>
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
                    />
                  <br />
                </>
              ) : col.QuestionType === "TL" ? (
                <>
                  <p>
                    {idx + 1}. {col.Question}
                  </p>
                  <p>{".".repeat(col.Question.length * 1.5)}</p>
                  <TextField fullWidth />
                  <br />
                </>
              ) : col.QuestionType === "Prompt" ? (
                <>
                  <p>
                    {idx + 1}. {col.Question}
                  </p>
                  <p>
                    {col.Prompt} {".".repeat(col.Question.length * 1.5)}
                  </p>
                  <TextField fullWidth />
                  <br />
                </>
              ) : (
                <p>
                  {idx + 1}. {col.Question}
                </p>
              )}
            </div>
          ))}
    </div>
  );
}
