import { Box, Button, Typography } from "@mui/material";

import CountdownTimer from "./CountDownTimer";
import { useNavigate } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import Hint1 from "../images/Hint1.webp";
import Hint2 from "../images/Hint2.jpeg";
import Hint3 from "../images/Hint3.webp";
import Hint4 from "../images/Hint4.jpeg";
function ClueForTheGift() {
    const navigate = useNavigate();
    const [hide , show ] =useState(false);
    const [hide1 , show1 ] =useState(false);
    const [hide2 , show2 ] =useState(false);
    const [hide3 , show3 ] =useState(false);
  const parentFn = () => {
    console.log("in parent ");
    show(!hide)
  };

  return (
    <Box>
      <Typography variant="h2">This clue will take you to the gift</Typography>

      <img
        alt="profile-user"
        width="500px"
        height="500px"
        src={Hint1}
        style={{ cursor: "pointer", borderRadius: "10%" }}
      />

      {hide1 &&  <img
        alt="profile-user"
        width="500px"
        height="500px"
        src={Hint2}
        style={{ cursor: "pointer", borderRadius: "10%" }}
      />}

{hide2 &&  <img
        alt="profile-user"
        width="500px"
        height="500px"
        src={Hint4}
        style={{ cursor: "pointer", borderRadius: "10%" }}
      />}

{hide3 &&  <img
        alt="profile-user"
        width="500px"
        height="500px"
        src={Hint3}
        style={{ cursor: "pointer", borderRadius: "10%" }}
      />}

      <CountdownTimer parentFn={parentFn} minutes={20} />

      {hide && 
      <Button
        sx={{ margin: "3%" }}
        onClick={() => {
             if (hide1==false) {
            alert("reveling hint 2!!!!!!!!!");
            show1(!hide1)
            
          }else if(hide2==false){
            alert("reveling hint 3!!!")
            show2(!hide2)
          }else if(hide3 == false){
            alert("reveling hint 3!!!!!!!!")
            show3(!hide3)
          }else{
            alert("Now i will help you to find your santa");
            navigate("/8")
          }
        }}
      >
        <ArrowForward sx={{ color: "green", scale: "6" }} />{" "}
      </Button>}

    </Box>
  );
}

export default ClueForTheGift;
