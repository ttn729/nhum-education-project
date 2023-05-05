
export default function OfflineMode({ data, error }) {
  return (
    <div style={{ marginTop: "3rem" }}>
      {error
        ? error
        : data.map((col, idx) => (
            <div key={idx}>
              {col.QuestionType === "MC" ? (
                <>
                  <p>
                    {idx + 1}. {col.Question}
                  </p>
                  <p>
                    A. {col.Choice1} &emsp; B. {col.Choice2} &emsp; C.
                    {col.Choice3} &emsp; D. {col.Choice4}
                  </p>

                  <br />
                </>
              ) : col.QuestionType === "TL" || col.QuestionType === "Rearrange" ? (
                <>
                  <p>
                    {idx + 1}. {col.Question}
                  </p>
                  <p>{".".repeat(col.Question.length * 1.5)}</p>
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
