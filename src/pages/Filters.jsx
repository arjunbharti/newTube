import React from 'react'
import '../styles/filters.css'

const Filters = () => {
  return (
    <>
        <div className="filters-container">
            <ul className='filters-list flex-row'>
                <li className='filters-list-item'>All</li>
                <li className='filters-list-item'>Liked</li>
                <li className='filters-list-item'>Trending</li>
                <li className='filters-list-item'>Comedy</li>
                <li className='filters-list-item'>Philosophy</li>
                <li className='filters-list-item'>Vlogs</li>
                <li className='filters-list-item'>Lofi</li>
            </ul>
        </div>
    </>
  )
}

export default Filters