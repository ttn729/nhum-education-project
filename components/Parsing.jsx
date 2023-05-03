import React, { useState } from "react";
import Papa from "papaparse";
import MultipleChoiceQuestion from "./MultipleChoiceQuestions";
import MUIChoiceQuestion from "./MUIChoiceQuestion";
import { FormControlLabel, Checkbox, Button, TextField } from "@mui/material";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

export const Parsing = () => {
  // This state will store the parsed data
  const [data, setData] = useState([]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  const [onlineMode, setOnlineMode] = React.useState(false);

  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };

  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      setData(parsedData);
    };
    reader.readAsText(file);
    console.log(data);
  };

  return (
    <div>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        Enter CSV File
      </label>
      <input
        onChange={handleFileChange}
        id="csvInput"
        name="file"
        type="File"
      />
      <div>
        <Button onClick={handleParse}>Parse</Button>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          onChange={(e) => setOnlineMode(e.target.checked)}
          label="Online"
        />
      </div>
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
    </div>
  );
};
