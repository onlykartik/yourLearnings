import { styled } from '@mui/material/styles';
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';




function ImageUpload(){
    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setSelectedImage(file);

    // Callback to parent component
  //  onImageSelect(file);

    }
    return (
        <Box>
        <Typography variant="h2"> 
      You need to uplaad a pic with your best buddy
        </Typography>
        
       
    <div>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Preview" />}
    </div>
        
         <Button sx={{margin:"20%"}} 
         onClick={()=> {
            if(selectedImage){
                alert("awesome!!!!!!!!!");
                navigate("/7")
            }
         }}
         > <ArrowForward sx={{ color: "green", scale: "6" }} /> </Button>
       
        

       
    </Box>
    )
};

export default ImageUpload;