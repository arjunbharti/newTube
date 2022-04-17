import React, { useEffect } from 'react'
import Header from './Header'
import '../styles/liked-videos.css'
import { useLikedVideo } from '../context/likedVideos-context';
import VideoCard from './VideoCard';

const LikedVideos = () => {
    useEffect(() => {
        document.title = "Liked | newTube"
    }, []);
    const { likedState } = useLikedVideo()
  return (
    <>
        <Header />
        <p className='text-center text-m page-heading'>Liked Videos</p>
            {likedState.liked.length === 0 ? ( 
                <p>no videos yet</p>
            ) : (
                <section className='videos-container'>
                    {likedState.liked.map((video) => {
                        return (
                            <>
                                <VideoCard key={video.id} video={video} />
                            </>
                        )
                    })}
                </section>
            )}
    </>
  )
}

export default LikedVideos