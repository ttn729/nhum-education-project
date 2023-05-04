import { TextField } from "@mui/material";

export default function OfflineMode({ data, onlineMode, error }) {
  return (
    <div style={{ marginTop: "3rem" }}>
      {error
        ? error
        : data.map((col, idx) => (
            <div key={idx}>
              {col.QuestionType === "MC" ? (
                <>
                  {!onlineMode && (
                    <>
                      <p>
                        {idx + 1}. {col.Question}
                      </p>
                      <p>
                        A. {col.Choice1} &emsp; B. {col.Choice2} &emsp; C.
                        {col.Choice3} &emsp; D. {col.Choice4}
                      </p>
                    </>
                  )}
                  {onlineMode && (
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
                  )}
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
