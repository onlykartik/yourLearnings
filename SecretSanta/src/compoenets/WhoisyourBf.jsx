import { ArrowForward } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CountdownTimer from "./CountDownTimer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 800,
  height: 500,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));
let message = "N/A";
function WhoisyourBf() {
  const navigate = useNavigate();
  const onChangeTextFieldHandler =(e)=>{

    console.log(e.target.value);
    message = e.target.value;

    
  }
  return (
    <Box>
      <Typography variant="h2">
        Hello,<strong>Nandini</strong> . Go to the 16th; there's a sticky paper attached to the vending machine with a question
      </Typography>
      <DemoPaper variant="outlined">
        <Typography variant="h5">Type your answer and your count down as alredy started</Typography>
        <TextField fullWidth label="Avoid typos" type="text" id="fullWidth" onChange={onChangeTextFieldHandler} />


        <Button
          onClick={() => {
            if(message.includes("CIVIL ENGINEER")){
                alert("HURRAY!!!!");
                navigate("/4");
            }else {
              window.location.reload(true);
            }
          }}
        >
          <ArrowForward sx={{ color: "green", scale: "6" }} />
        </Button>

      </DemoPaper>

      <CountdownTimer parentFn={()=>{}} minutes={7} />
    </Box>
  );
}

export default WhoisyourBf;
