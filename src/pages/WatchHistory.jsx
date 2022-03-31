import React, { useEffect } from 'react'
import Header from './Header'

const WatchHistory = () => {
    useEffect(() => {
        document.title = "History | newTube"
    }, [])
    return ( 
      <>
          <Header />
        <p className='text-center text-m page-heading'>Watch history</p>
        <section className='videos-container'>
            
        </section>
      </>
    )
}

export default WatchHistory