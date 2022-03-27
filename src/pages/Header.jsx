import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
    return (
        <>
        <header>
            <div className="logo-items">
                <img className="logo" src="/favicon.png" alt="icon/img" />
                <Link className="header-name" to="/">newTube</Link>    
            </div>
            <input className="nav-search" type="search" placeholder="Search trending videos here..." />
            <nav>
                <div className="nav-action-items">
                    <Link className="nav-saved-action" to="/saved"><i class="fa-regular fa-bookmark fa-lg"><span className="badge-icon">0</span></i></Link>
                    <Link className="nav-playlist-action" to="/playlist"><i class="far fa-play-circle fa-lg"><span className="badge-icon">0</span></i></Link>
                    <Link className="nav-history-action" to="/history"><i class="fa-solid fa-clock-rotate-left fa-lg"><span className="badge-icon">0</span></i></Link>
                </div>
            </nav>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </header>
        </>
    )
}

export default Header