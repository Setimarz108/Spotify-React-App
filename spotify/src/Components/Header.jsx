import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@material-ui/core";

export default function Header() {
    return (
       
             <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt='' src='' />
        <h4>user</h4>
      </div>
    </div>
            )
}
