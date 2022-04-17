import React from 'react'
import { Link } from 'react-router-dom'
import { useLikedVideo } from '../context/likedVideos-context'
import { useWatchLater } from '../context/watchLater-context'
import '../styles/header.css'

const Header = () => {
    const { watchLaterState } = useWatchLater();
    const { likedState } = useLikedVideo();
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
                    <Link className="nav-liked-action" to="/liked"><i className="fa-regular fa-heart fa-lg"><span className="badge-icon">{likedState.liked.length}</span></i></Link>
                    <Link className="nav-saved-action" to="/saved"><i className="fa-regular fa-bookmark fa-lg"><span className="badge-icon">{watchLaterState.watchLater.length}</span></i></Link>
                    <Link className="nav-playlist-action" to="/playlist"><i className="far fa-play-circle fa-lg"><span className="badge-icon">0</span></i></Link>
                    <Link className="nav-history-action" to="/history"><i className="fa-solid fa-clock-rotate-left fa-lg"><span className="badge-icon">0</span></i></Link>
                    <Link className="nav-user-action" to="/login"><i className="far fa-user fa-lg"></i></Link>
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