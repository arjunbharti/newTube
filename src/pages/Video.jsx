import React, { useEffect } from 'react'
import Header from './Header'
import '../styles/video.css'
import { useAuth } from '../context/auth-context'

const Video = () => {
    useEffect(() => {
        document.title = "new video | newTube"
    }, [])

  return (
    <>
        <Header />
        <section className='video-container'>
            <div className="video flex-column">
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
                <div className='card-body card-body-video'>
                <div className="card-body-title">
                    efeege
                </div>
                <div className="card-body-subtitle">
                    wnowfw
                </div>
                <div className="card-description video-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat cumque magnam natus vero eaque inventore quia enim quo voluptates maiores. Nisi magnam dolorem minus eum laboriosam beatae sit laborum voluptatem.
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Video