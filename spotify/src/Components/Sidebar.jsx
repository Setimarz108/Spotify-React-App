import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { height } from '@mui/system';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="logo"><img src="https://i.pinimg.com/originals/c4/5c/fe/c45cfed3c462db58662d9cbb771ba144.jpg" alt="" srcset="" style={{width:"50px", height:"40px", color:"white"}} />
            <h2>Spotify</h2>  </div>
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon}title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your library"/>
            <br />
            <strong className='sidebar__title'>Playlist</strong>
            <hr />

            <SidebarOption  title="pop"/>
            <SidebarOption title="Rock"/>
            <SidebarOption  title="Soul"/>
        </div>
    )
}
