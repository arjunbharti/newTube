import React, { useState } from 'react'
import '../styles/video-card.css';
import AddToPlaylist from './AddToPlaylist';
import { useWatchLater } from '../context/watchLater-context';

const VideoCard = ({video}) => {
  const [openModal, setOpenModal] = useState(false);
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  return (
        <>
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
                        {watchLaterState.watchLater.find((item) => item.id === video.id) ? (
                            <div className="card-button">
                                <button 
                                    className="btn-card"
                                    onClick={() => watchLaterDispatch({
                                        type: "remove-from-watchLater",
                                        payload: video
                                    })}
                                >
                                Remove from list
                                </button>
                            </div>
                        ) : (
                            <div className="card-button">
                                <button 
                                    className="btn-card"
                                    onClick={() => watchLaterDispatch({
                                        type: "add-to-watchLater",
                                        payload: video
                                    })}
                                >
                                Watch later
                                </button>
                            </div>
                        )}
                        <div className="card-button">
                            <button 
                                className="btn-card btn-card-secondary"
                                onClick={() => setOpenModal(true)}
                            >Add to playlist</button>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && <AddToPlaylist closeModal={setOpenModal}/>}

</>        
  )
}

export default VideoCard