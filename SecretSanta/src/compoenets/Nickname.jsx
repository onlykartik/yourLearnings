import { Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import nandiniImg from "../images/nandini Image_2.jpeg"

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 800,
    height: 500,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

function Nickname(){
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        "Tingari" : false,
        "Little Tingari" : false,
        "Waste fellow" : false,
        "Big Tingari" : false,
        "All the above" : false
    });

    const onSelectHandler = (e)=>{
        setFormValues(  {
            ...formValues,
            [e.target.name] : e.target.checked,
        });
    }

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        console.log(formValues);
        if(formValues["Little Tingari"]==true){
            alert("Guess what ? you are  `ALL THE ABOVE`");
            navigate("/2")

        }else if(formValues["All the above"]==true){
            alert("Guess what ? you are  `EXACTLY RIGHT`");
            navigate("/2")
        }
        else{
            alert("In correct")
        }

    }
    return(
        <Box>
            <Typography variant="h2"> 
            Hello, Nandini. I'm not upset, nor do I have any illusions. Of course, I know your name
            </Typography>
            
            <DemoPaper variant="outlined">
            <form onSubmit={onSubmitHandler}>
            <Typography variant="h4"> Tell me your nick name as mentioned in letter </Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={onSelectHandler}  />} name="Tingari" label="Tingari" />
                <FormControlLabel control={<Checkbox onChange={onSelectHandler} />} name="Little Tingari" label="Little Tingari" />
                <FormControlLabel control={<Checkbox onChange={onSelectHandler} />} name="Waste fellow" label="Waste fellow" />
                <FormControlLabel control={<Checkbox onChange={onSelectHandler} />} name="Mad" label="Big Tingari" />
                <FormControlLabel control={<Checkbox  onChange={onSelectHandler}/>} name="All the above" label="All the above" />
            </FormGroup>
             <Button type="submit" > <ArrowForward sx={{ color: "green", scale: "6" }} /> </Button>
            </form>
            </DemoPaper>

           
              <img
                alt="profile-user"
                width="500px"
                height="500px"
                src={nandiniImg}
                style={{ cursor: "pointer", borderRadius: "10%" }}
              />
           
        </Box>
    )
};

export default Nickname