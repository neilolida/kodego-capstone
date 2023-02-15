import React, { useContext } from 'react'
import './Navbar.css'

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {


    const {currentUser} = useContext(AuthContext);
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
                <img src={currentUser.profilePic} alt="..." />
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar