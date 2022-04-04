import React, { useEffect, useState } from 'react'
import Header from './Header'
import VideoCard from './VideoCard'
import '../styles/videos.css'
import Filters from './Filters'
import axios from 'axios'
const Videos = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const data = [...videos];

  const getVideos = async () => {
    try {
      setLoading(false);
      const res = await axios.get('/api/videos');
      setVideos(res.data.videos);
      setLoading(false);
    } catch(error){
      alert(error.message);
    }
  }

  return (
    <>
      <Header />
      <Filters />
      <section>
        {loading ? (<p>loading...</p>) : (
          <div className='videos-container'>
            {data.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default Videos