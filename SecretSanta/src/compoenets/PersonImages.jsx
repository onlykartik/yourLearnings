import { Box, Button, ImageListItemBar, Typography } from "@mui/material";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import nandiniImg1 from "../images/nandini Image_1.jpeg";
import nandiniImg2 from "../images/nandini Image_2.jpeg";
import nandiniImg3 from "../images/nandini Image_3.jpeg";
import nandiniImg4 from "../images/nandini Image_4.jpeg";
import nandiniImg5 from "../images/nandini Image_5.jpeg";
import nandiniImg6 from "../images/nandini Image_6.jpeg";
import nandiniImg7 from "../images/nandini Image_7.jpeg";
import nandiniImg8 from "../images/nandini Image_8.jpeg";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function QuiltedImageList() {
    
  return (
    <ImageList sx={{ width: 800, height: 850 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: nandiniImg1,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: nandiniImg2,
    title: "Burger",
  },
  {
    img: nandiniImg3,
    title: "Camera",
  },
  {
    img: nandiniImg4,
    title: "Coffee",
    cols: 2,
  },
  {
    img: nandiniImg5,
    title: "Hats",
    cols: 2,
  },
  {
    img: nandiniImg6,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: nandiniImg7,
    title: "Basketball",
  },
  {
    img: nandiniImg8,
    title: "Fern",
  },
];

function PersonImages() {
    const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h4"> MOMENTS OF LITTLE TINGARI NANDINI </Typography>
      <QuiltedImageList />
      <Button
        onClick={() => {
          navigate("/5");
        }}
      >
        <ArrowForward sx={{ color: "green", scale: "6" }} />
      </Button>
    </Box>
  );
}

export default PersonImages;
