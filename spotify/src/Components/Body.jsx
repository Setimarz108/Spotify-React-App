import React from "react";
import "./Body.css";
import Header from "./Header";
import "./Header.css";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Body() {
  return (
    <div className="body">
      <Header className="header" />

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
    </div>
  );
}
