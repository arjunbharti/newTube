import React from 'react'
import '../styles/add-to-playlist.css'

const AddToPlaylist = ({closeModal}) => {
  return (
    <>
        <div className="modal">
            <p className="modal-heading text-m">My Playlist</p>
            <label for="" class="input-label">New playlist</label>
            <div className='modal-action flex-row'>
              <input 
                      type="email" 
                      className="input"
                      placeholder="Enter playlist name"
              />  
              <button class="btn btn-icon">                   
                <i className="fa fa-bookmark"></i>
              </button>
            </div>
            <div className="existing-playlist">
              <div className="playlist-item">
              <p className='playlist-item-name'>Playlist name</p>
              </div>
              <hr />
              <div className="playlist-item">
                <p className='playlist-item-name'>Playlist name</p>
              </div>
              <hr />
              <div className="playlist-item">
              <p className='playlist-item-name'>Playlist name</p>
              </div>
            </div>
            <div className="modal-footer">  
                    <button onClick={() => closeModal(false)} className="btn btn-primary">Close</button>
            </div>    
        </div>
    </>
  )
}

export default AddToPlaylist