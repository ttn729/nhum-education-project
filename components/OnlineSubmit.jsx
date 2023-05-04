
import { Button } from "@mui/material";

export default function OnlineSubmit({answers}) {

    return (
        <Button onClick={() => console.log(answers)}>Submit Assignment</Button>
    )
}