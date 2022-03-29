import React from 'react'
import { videos } from '../backend/db/videos'
import '../styles/video-card.css';

const VideoCard = () => {
  return (
    <>
    {videos.map((video) => {
        return (
            <div className="card card-text-overlay">
                <div className="card-img-container">
                    <img src={video.thumbnail} alt="img/thumbnail" className="card-img" />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <div className="card-body-title">
                                {video.title}
                        </div>
                        <div className="card-body-subtitle">
                                {video.creator}
                        </div>
                    </div>
                    <div className="card-action-items">
                        <div class="like-badge">
                            <i className='fa-regular fa-heart'></i>
                        </div>
                        <div className='card-duration'>{video.duration}</div>
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
        )
    })}
        
    </>
  )
}

export default VideoCard