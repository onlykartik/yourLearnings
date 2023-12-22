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

function Warmup() {
  const navigate = useNavigate();
  const [disabled, enable] = useState(true);

  let authorFullName = "N/A";

  const onChangeAuthorHandler = (e) => {
    console.log(e.target.value);
    authorFullName = e.target.value;
  };

  const parentFn = () => {
    enable(!disabled);
  };
  return (
    <Box>
      <Typography variant="h2">
        Hello, <strong>Tingari</strong> you need to read this all
      </Typography>
      <DemoPaper variant="outlined">
        <Typography variant="h5">
          Do not go gentle into that good night, Old age should burn and rave at
          close of day; Rage, rage against the dying of the light. Though wise
          men at their end know dark is right, Because their words had forked no
          lightning they Do not go gentle into that good night. Good men, the
          last wave by, crying how bright Their frail deeds might have danced in
          a green bay, Rage, rage against the dying of the light.
        </Typography>

        <TextField
          id="standard-basic"
          label="Type The Author Full Name"
          variant="standard"
          color="error"
          onChange={onChangeAuthorHandler}
          type="text"
          disabled={disabled}
          sx={{ backgroundColor: "white", width: "300px", fontSize: "100px" }}
        />

        <Button
          onClick={() => {
            if (authorFullName.trim().toLowerCase() == "dylan thomas") {
              alert("Correct");
              navigate("/3");
            } else {
              window.location.reload(true);
            }
          }}
        >
          <ArrowForward sx={{ color: "green", scale: "6" }} />
        </Button>
      </DemoPaper>

      <CountdownTimer parentFn={(parentFn)} minutes={3.5} />
    </Box>
  );
}

export default Warmup;
