import './Player.css'
import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'


export default function Player() {
    return (
        <div className='player'>
            <div className='player_body'>
                <Sidebar/>
                <Body/>
            </div>
            <Footer/>
        </div>
    )
}
