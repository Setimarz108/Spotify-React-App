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
            <img className='logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" srcset="" />
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
