import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForwardIosSharp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function NextArrow(props) {
  const navigate = useNavigate();
  return (
    <Tooltip title="Next" arrow>
      <Button type={props.type} onClick={() => navigate(props.navTo)}>
        <ArrowForward sx={{ color: "green", scale: "6" }} />
      </Button>
    </Tooltip>
  );
}

function Wellcome() {
  const [Start, setStart] = useState(false);

  return (
    <>
      {!Start ? (
        <Box textAlign={"center"}>
          <Typography variant="h1">
          To begin the game, click 'Next.' You need to be both physically and mentally attentive for this challenge.
          </Typography>
          <Button onClick={() => setStart(state=> !state)}>
            <ArrowForward sx={{ color: "green", scale: "10" }} />
          </Button>
        </Box>
      ) : (
        <Box textAlign={"center"}>
          <Typography variant="h1">
          Hello, whoever you are, tell me your name
          </Typography>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            color="success"
            
            sx={{ backgroundColor: "white", width: "300px", fontSize: "100px" }}
          />
          <NextArrow navTo={"/1"} />
        </Box>
      )}
    </>
  );
}

export default Wellcome;
