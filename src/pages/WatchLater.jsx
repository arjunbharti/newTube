import React, { useEffect } from 'react'
import Header from './Header'
import { useWatchLater } from '../context/watchLater-context';
import VideoCard from './VideoCard';
import '../styles/watchLater.css'

const WatchLater = () => {
    useEffect(() => {
        document.title = "Watchlist | newTube"
    }, []);
    const { watchLaterState } = useWatchLater();
  return (
    <>
        <Header />
        <p className='text-center text-m page-heading'>Watch later section</p>
        {watchLaterState.watchLater.length === 0 ? (
            <>
            <p className='text-center empty-wishlist-text text-l'>kya kar rhe ho *folks* videos toh add kro</p>
            <div className='text-center empty-watchLater flex-row'>
                <img className='empty-wishlist-photo' src="https://images.hindustantimes.com/img/2022/01/30/550x309/Ashneer_ST_1643542117048_1643542159601.jpeg" alt="" />
            </div>
            </>
        ) : (
            <section className='videos-container'>
                {watchLaterState.watchLater.map((video) => {
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

export default WatchLater