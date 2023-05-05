import React, { useState } from "react";
import Papa from "papaparse";
import toast from 'react-hot-toast';
import { FormControlLabel, Checkbox, Button } from "@mui/material";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

export const Parsing = ({setData, setOnlineMode, setError, setQuestionTypes}) => {

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

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

    toast.success("Parsed sucessfully!")

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      console.log(parsedData);

      const countByQuestionType = parsedData.reduce((count, question) => {
        const questionType = question.QuestionType;
        return { ...count, [questionType]: (count[questionType] || 0) + 1 };
      }, {});
      
      setQuestionTypes(countByQuestionType);
      console.log(countByQuestionType);

      setData(parsedData);
    };
    reader.readAsText(file);
    
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
          control={<Checkbox/>}
          onChange={(e) => setOnlineMode(e.target.checked)}
          label="Online"
        />
      </div>
    </div>
  );
};
