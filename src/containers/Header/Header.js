import React from 'react'

import'./Header.scss'
import logo from './logo.svg'

import MenuIcon from '@material-ui/icons/Menu';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <MenuIcon className="icon"  />
                <img src={logo} alt="Logo" />
            </div>
            <form className="header__center">
                <input placeholder="Search" />
                <div type="submit">
                    <SearchRoundedIcon className="icon" />
                </div>
            </form>
            <div className="header__right">
                <VideoCallIcon className="icon" />
                <AppsIcon className="icon" />
                <MoreVertIcon className="icon" />
                <a href="name" className='login-button'>
                    <Avatar variant="circular" className="icon" />
                    SIGN IN
                </a>
            </div>
        </header>
    )
}

export default Header
