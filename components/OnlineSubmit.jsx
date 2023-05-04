import { Button } from "@mui/material";
import React from "react";

export default function OnlineSubmit({ answers }) {
  const output = answers.map((answer, index) => `${index + 1}. ${answer}\n`);
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShow(!show)}>
        Submit Assignment / Show Answers
      </Button>

      {show && (
        <div>
          {output.map((item) => (
            <h1 key={item}>{item}</h1>
          ))}
        </div>
      )}
    </>
  );
}
