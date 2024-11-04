import React from 'react';
import './Header.css';
import { Avatar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleIcon from '@mui/icons-material/Circle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';


function Header() {
  return (
    <div className='header'>

      <div className="header_left">
        <IconButton>
            <MenuIcon />
        </IconButton> 
        <img src='https://cdn.vox-cdn.com/thumbor/poDiPWB_ZM1VtgA-FclJVc-Hrl4=/0x0:1320x880/2000x1333/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg' alt='' />
      </div>

      <div className='header_middle'>
        <SearchIcon />
        <input placeholder='Search mail' type='text'/>
        <TuneIcon className='header_input' />
      </div>

      <div className='header_right'>
        <button className='gmail-button'>
            <CircleIcon className='circle-icon' style={{ color: 'green'}}/>Active<KeyboardArrowDownIcon />
        </button>
      </div>
      <div className='header_right_icons'>
            <HelpOutlineIcon />
            <SettingsIcon/>
            <AppsIcon />
            <Avatar />
        </div>
    </div>
  )
}

export default Header
