import { styled } from '@mui/material/styles';
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 800,
    height: 500,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));


function FalseSanta(){
    const navigate = useNavigate();

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        alert("Congrats nandini you are right les move forward")
        navigate("/6")
    }
    return (
        <Box>
        <Typography variant="h2"> 
        Exclude two individuals who may not be your Secret Santa
        </Typography>
        
        <DemoPaper variant="outlined">
        <form onSubmit={onSubmitHandler}>
        <Typography variant="h4"> If You fail to guess you need to start over again with width different time lines  </Typography>
        <FormGroup>
            <FormControlLabel control={<Checkbox  />} name="Tingari" label="Nithin" />
            <FormControlLabel control={<Checkbox  />} name="Little Tingari" label="Abhi" />
            <FormControlLabel control={<Checkbox  />} name="Waste fellow" label="Karthik" />
            <FormControlLabel control={<Checkbox  />} name="Mad" label="Billa" />
            <FormControlLabel control={<Checkbox  />} name="All the above" label="Aishwarya" />
            <FormControlLabel control={<Checkbox  />} name="All the above" label="Saroj" />
            <FormControlLabel control={<Checkbox  />} name="All the above" label="sudheer" />
            <FormControlLabel control={<Checkbox  />} name="All the above" label="Bharat" />
            <FormControlLabel control={<Checkbox  />} name="All the above" label="sahera" />
            <FormControlLabel control={<Checkbox  />} name="All the above" label="Jyothi" />
            <FormControlLabel control={<Checkbox  />} name="All the above" label="sahera" />
        </FormGroup>
         <Button type="submit" > <ArrowForward sx={{ color: "green", scale: "6" }} /> </Button>
        </form>
        </DemoPaper>

       
    </Box>
    )
};

export default FalseSanta;