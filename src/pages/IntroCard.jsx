import React from 'react'
import '../styles/intro-card.css'

const IntroCard = () => {
  return (
    <div className='intro-container'>
        <div className="heading flex-column">
            <p className='intro-text'>newTube to cater </p>
            <p className='intro-text'>all your</p>
            <p className='intro-text intro-text-main'>entertainment needs</p>
            <button className='btn btn-videos text-sm'>Watch now</button>
        </div>
    </div>
  )
}

export default IntroCard