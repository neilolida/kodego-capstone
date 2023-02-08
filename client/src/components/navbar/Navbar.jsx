import React from 'react'
import './Navbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar__container'>

        <div className="navbar__container-left">
            <Link to='/' style={{ textDecoration:'none' }}>
                <span className='navbar__container-left_logo'>ProgMed</span>
            </Link>
            <HomeOutlinedIcon />
            <DarkModeOutlinedIcon />
            <GridViewOutlinedIcon />

            <div className="navbar__container-left_search">
                <SearchOutlinedIcon />
                <input type="text" placeholder='Search...'/>
            </div>   
        </div>

        <div className="navbar__container-right">
            <PersonOutlineOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />

            <div className="navbar__container-right_user">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                <span>Johny Sins</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar