import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import { CardContent } from "@material-ui/core";

export default function SingleAlbum(props) {
  return (
    <>

      
      <Card  sx={{ width: 150 }} style={{backgroundColor:"#191919",marginLeft:"10px", marginBottom:"10px", padding:"10px"}}>
        <CardActionArea className="card">
          <CardMedia
            component="img"
            height="150"
           src={props.src}
            key={props.key}
            alt="album"

            
                     />
           <CardContent>
          <div  style={{display:"flex", maxWidth:"100%", color:"grey"}}><h5 gutterBottom variant="h6">
            {props.title}
          </h5></div>
        </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
