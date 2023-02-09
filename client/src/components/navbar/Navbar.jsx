import React from 'react'
import './Navbar.css'

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar__container'>

        <div className="navbar__container-left">
            <Link to='/' style={{ textDecoration:'none' }}>
                <span className='navbar__container-left_logo'>Hello Friends</span>
            </Link>           
        </div>

        <div>

        <div className="navbar__container-left_search">
                <SearchOutlinedIcon />
                <input type="text" placeholder='Search...' className='input'/>
            </div>
        </div>

        <div className="navbar__container-right">
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