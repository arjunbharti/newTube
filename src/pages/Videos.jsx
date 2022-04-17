import React, { useEffect, useState } from 'react'
import Header from './Header'
import VideoCard from './VideoCard'
import '../styles/videos.css'
import Filters from './Filters'
import axios from 'axios'

const Videos = () => {
  useEffect(() => {
    getVideos();
}, [])

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const res = await axios.get('/api/videos');
      setVideos(res.data.videos);
    } catch (error) {
        alert(error.message);
    }
}
  return (
    <>
      <Header />
      <Filters />
      <section className='videos-container'>
        {videos.map((video) => {
          return(
            <>
              <VideoCard video={video} key={video.id} />
            </>
        )})}
      </section>
    </>
  )
}

export default Videos