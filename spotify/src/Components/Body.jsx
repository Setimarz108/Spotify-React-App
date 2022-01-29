import React from "react";
import "./Body.css";
import Header from "./Header";
import "./Header.css";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState, useEffect } from "react";
import { fetchAlbum } from "../apicalls";
import SingleAlbum from "./SingleAlbum";
import { Grid } from "@mui/material";

export default function Body() {
  const [greenDay, setGreenDay] = useState();
  const [oliviaRodrigo, setOliviaRodrigo] = useState();

  useEffect(() => {
    fetchAlbum("green Day").then((res) => setGreenDay(res));
    fetchAlbum("olivia Rodrigo").then((res) => setOliviaRodrigo(res));
  }, []);

  return (
    <>
      <div className="body">
        <Header className="header" />
{/* 
        <div className="body__info">
          <img
            src="https://dazedimg-dazedgroup.netdna-ssl.com/786/azure/dazed-prod/1270/9/1279480.jpg"
            alt=""
          ></img>
          <div className="body__infoText">
            <strong>This is</strong>
            <h2>Royksöop</h2>
            <h3>description</h3>
          </div>
        </div>
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle" />
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
          
          {greenDay &&
            greenDay.slice(0, 6).map((song) => (
                <SingleAlbum 
                  src={song.album.cover_medium}
                  id={song.id}
                ></SingleAlbum>
              ))}
        </div> */}
        <h2 style={{marginBottom:"10px"}}>Good night</h2>
      <Grid container spacing={{ xs: 2, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} 
      style={{marginBottom:"50px"}}>

           
         
          {greenDay &&
            greenDay.slice(0, 6).map((song) => (
                
                <SingleAlbum 
                  src={song.album.cover_medium}
                  key={song.id}
                  title={song.album.title}
                  name={song.artist.name}
                ></SingleAlbum>
              ))}
        </Grid>

        <Grid style={{marginBottom:"50px"}} container spacing={{ xs: 2, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
          {oliviaRodrigo &&
            oliviaRodrigo.slice(0, 6).map((song) => (
                <SingleAlbum 
                  src={song.album.cover_medium}
                  key={song.id}
                  title={song.album.title}
                  name={song.artist.name}
                ></SingleAlbum>
              ))}
        </Grid>
      </div>
    </>
  );
}
