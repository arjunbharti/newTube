import React, { useEffect } from 'react'
import Header from './Header'
import '../styles/playlist.css'

const Playlist = () => {
    useEffect(() => {
        document.title = 'Playlist | newTube'
    })
  return (
    <>
        <Header />
        <p className='text-center text-m page-heading'>My Playlist</p>
        <div className="playlist-container">
            <div className="playlist flex-column">
                <div className='playlist-action flex-row'>
                    <p className="playlist-name">xyz yoyo</p>
                    <button className='btn-card'>Delete playlist</button>
                </div>
                <div className="videos-container flex-row">
                    <div className="card card-text-overlay">
                        <div className="card-img-container">
                            <img src="{video.thumbnail}" alt="img/thumbnail" className="card-img" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <div className="card-body-title">
                                </div>
                                <div className="card-body-subtitle">
                                </div>
                            </div>
                            <div className="card-action-items">
                                <div class="like-badge">
                                    <i className='fa-regular fa-heart'></i>
                                </div>
                                <div className='card-duration'></div>
                            </div>
                            <div className="card-action-items">
                                <div className="card-button">
                                    <button className="btn-card">Watch later</button>
                                </div>
                                <div className="card-button">
                                    <button className="btn-card btn-card-secondary">Remove from playlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-text-overlay">
                        <div className="card-img-container">
                            <img src="{video.thumbnail}" alt="img/thumbnail" className="card-img" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <div className="card-body-title">
                                </div>
                                <div className="card-body-subtitle">
                                </div>
                            </div>
                            <div className="card-action-items">
                                <div class="like-badge">
                                    <i className='fa-regular fa-heart'></i>
                                </div>
                                <div className='card-duration'></div>
                            </div>
                            <div className="card-action-items">
                                <div className="card-button">
                                    <button className="btn-card">Watch later</button>
                                </div>
                                <div className="card-button">
                                    <button className="btn-card btn-card-secondary">Add to playlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='playlist flex-column'>
            <p className="playlist-name">xyz yoyo</p>
            <div className="videos-container flex-row">
                <div className="card card-text-overlay">
                    <div className="card-img-container">
                        <img src="{video.thumbnail}" alt="img/thumbnail" className="card-img" />
                    </div>
                    <div className="card-body">
                        <div className="card-title">
                            <div className="card-body-title">
                            </div>
                            <div className="card-body-subtitle">
                            </div>
                        </div>
                        <div className="card-action-items">
                            <div class="like-badge">
                                <i className='fa-regular fa-heart'></i>
                            </div>
                            <div className='card-duration'></div>
                        </div>
                        <div className="card-action-items">
                            <div className="card-button">
                                <button className="btn-card">Watch later</button>
                            </div>
                            <div className="card-button">
                                <button className="btn-card btn-card-secondary">Add to playlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-text-overlay">
                    <div className="card-img-container">
                        <img src="{video.thumbnail}" alt="img/thumbnail" className="card-img" />
                    </div>
                    <div className="card-body">
                        <div className="card-title">
                            <div className="card-body-title">
                            </div>
                            <div className="card-body-subtitle">
                            </div>
                        </div>
                        <div className="card-action-items">
                            <div class="like-badge">
                                <i className='fa-regular fa-heart'></i>
                            </div>
                            <div className='card-duration'></div>
                        </div>
                        <div className="card-action-items">
                            <div className="card-button">
                                <button className="btn-card">Watch later</button>
                            </div>
                            <div className="card-button">
                                <button className="btn-card btn-card-secondary">Add to playlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </>
  )
}

export default Playlist