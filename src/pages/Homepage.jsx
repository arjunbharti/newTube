import React, { useEffect } from 'react'
import CategorySection from './CategorySection'
import Header from './Header'
import IntroCard from './IntroCard'

const Homepage = () => {
  useEffect(() => {
    document.title = 'newTube | Home'
  }, [])
  return (
    <>
      <Header />
      <IntroCard />
      <CategorySection />
    </>
  )
}

export default Homepage