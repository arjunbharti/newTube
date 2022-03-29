import React from 'react'
import { categories } from '../backend/db/categories'
import '../styles/category-section.css'

const CategorySection = () => {
  return (
    <div className='category-section'>
      <div className="category-section-text text-m text-center">Categories</div>
      <div className="category-container">
        {categories.map((item) => {
          return (
            <div className="category-card">
              <img className="category-card-img" src={item.image} alt="" />
              <div className="card-body">
                <div className="card-body-title">
                  {item.categoryName}
                </div>
                <div className="card-body-subtitle">
                  {item.description}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategorySection