import React, { useEffect } from 'react'
import Header from './Header'
import VideoCard from './VideoCard'
import '../styles/videos.css'
import Filters from './Filters'
const Videos = () => {
  useEffect(() => {
    document.title = 'Videos | newTube'
  })
  return (
    <>
      <Header />
      <Filters />
      <section className='videos-container'>
        <VideoCard />
      </section>
    </>
  )
}

export default Videos